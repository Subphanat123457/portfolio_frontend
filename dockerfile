# ใช้ Base Image ของ Bun
FROM oven/bun:latest as builder

# ตั้ง Working Directory
WORKDIR /app

# คัดลอกไฟล์โปรเจกต์
COPY . .

# ติดตั้ง Dependencies และ Build Project
RUN bun install
RUN bun run build

# ใช้ Nginx สำหรับเสิร์ฟไฟล์ Build
FROM nginx:latest

# คัดลอกไฟล์ Nginx Configuration
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# คัดลอก SSL Certificates (เตรียมไว้ในเครื่องโฮสต์)
COPY ./certs /etc/nginx/certs

# คัดลอกไฟล์ Build ไปยัง Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# เปิดพอร์ต HTTPS
EXPOSE 443

# รัน Nginx
CMD ["nginx", "-g", "daemon off;"]