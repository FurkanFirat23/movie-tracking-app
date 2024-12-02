# Movie Tracking App

Bu proje, kullanıcıların film ve dizi aramalarını gerçekleştirebileceği ve detaylarını görebileceği basit bir uygulamadır. **Next.js** ve modern web teknolojileri kullanılarak geliştirilmiştir.

---

## Kullanılan Teknolojiler

### 1. **Next.js 13 (App Router ile)**

- React tabanlı bir framework. Projenin temel yapısını oluşturur.
- **App Router** ile modern dosya bazlı yönlendirme.
- **Server ve Client Component** mimarisi.

### 2. **TypeScript**

- Statik tip kontrolü sağlar. Daha güvenli ve hatasız kod yazmayı kolaylaştırır.

### 3. **Tailwind CSS**

- Hızlı ve modern bir CSS framework'ü.
- Bileşenlerin tasarımında esnekliği ve hız sağlar.

### 4. **OMDB API**

- Film ve dizi bilgilerini almak için kullanılan ücretsiz bir API.
- Posterler, isimler ve yıllar gibi temel bilgileri sağlar.
- [OMDB API](https://www.omdbapi.com/) üzerinden API anahtarı ile çalışır.

### 5. **ESLint & Prettier**

- Kodun tutarlılığını ve temizliğini sağlamak için kullanıldı.
- Daha iyi bir geliştirici deneyimi sunar.

### 6. **PostCSS**

- Tailwind CSS ile uyumlu bir şekilde çalışarak CSS işlemlerini optimize eder.

### 7. **Environment Variables (.env.local)**

- API anahtarlarını ve gizli bilgileri saklamak için çevre değişkenleri kullanıldı.
- **NEXT_PUBLIC_OMDB_API_KEY**: OMDB API erişimi için kullanılan anahtar.

---

## Özellikler

- Popüler filmleri listeleme.
- Film ve dizi arama özelliği.
- Detaylı film sayfası (poster, açıklama ve yayın yılı bilgileri ile).
- Dinamik yönlendirme (film ID'sine göre sayfa oluşturma).
- Responsive tasarım.

---

## Projenin Kurulumu ve Çalıştırılması

### 1. Gereksinimler

- Node.js (v16 veya üstü)
- NPM veya Yarn paket yöneticisi

### 2. Proje Kurulumu

Aşağıdaki adımları izleyerek projeyi çalıştırabilirsiniz:

#### a. Depoyu Klonlayın:

````bash
git clone https://github.com/your-repo/movie-tracking-app.git
cd movie-tracking-app




# Movie Tracking App

This project is a simple application that allows users to search for movies and TV shows and view their details. It is built using **Next.js** and modern web technologies.

---

## Technologies Used

### 1. **Next.js 13 (with App Router)**
- A React-based framework that serves as the core structure of the project.
- Uses **App Router** for modern file-based routing.
- Implements **Server and Client Component** architecture.

### 2. **TypeScript**
- Enables static type checking for safer and less error-prone development.

### 3. **Tailwind CSS**
- A fast and modern CSS framework.
- Provides flexibility and speed in designing components.

### 4. **OMDB API**
- A free API used to fetch movie and TV show data.
- Provides essential details like posters, titles, and years.
- Works with an API key from [OMDB API](https://www.omdbapi.com/).

### 5. **ESLint & Prettier**
- Ensures consistent and clean code formatting.
- Enhances the developer experience.

### 6. **PostCSS**
- Works seamlessly with Tailwind CSS to optimize CSS processing.

### 7. **Environment Variables (.env.local)**
- Stores sensitive information like API keys.
- **NEXT_PUBLIC_OMDB_API_KEY**: Used for OMDB API access.

---

## Features
- List popular movies.
- Search functionality for movies and TV shows.
- Detailed movie page (with poster, description, and release year information).
- Dynamic routing (pages generated based on movie ID).
- Responsive design.

---

## Project Setup and Running Instructions

### 1. Prerequisites
- Node.js (v16 or higher)
- NPM or Yarn package manager

### 2. Installation
Follow these steps to set up and run the project:

#### a. Clone the Repository:
```bash
git clone https://github.com/your-repo/movie-tracking-app.git
cd movie-tracking-app

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
