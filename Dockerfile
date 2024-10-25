# Etapa 1: Usar a imagem Node.js para build da aplicação Angular
FROM node:18 AS build

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o código do projeto Angular para o container
COPY . .

# Expor a porta 4200 para que o Angular CLI sirva a aplicação
EXPOSE 4200

# Comando para build em modo de desenvolvimento
CMD ["npm", "start"]

