# Usa una imagen base oficial de Node.js para construir la aplicación
FROM node:20-alpine as build

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# Construye la aplicación de React
RUN npm run build

# Usa una imagen base de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos de construcción de React desde la imagen anterior
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 80

# Define el comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
