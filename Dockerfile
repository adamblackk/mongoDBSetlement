# Node.js'in temel imajını kullan
FROM node:16

# Uygulamanın çalışacağı dizini ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install


# Tüm proje dosyalarını kopyala
COPY . .

# Uygulamanın dinleyeceği port
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
