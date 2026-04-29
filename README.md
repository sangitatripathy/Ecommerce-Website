# 🛒 Ecommerce Website

[![Live Demo](https://img.shields.io/badge/🔗%20Live%20Demo-Visit%20Website-1f6feb?style=for-the-badge&logo=vercel)](https://forever-backend-eight-red.vercel.app)

## 🚀 Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7.13-F44250?style=flat-square&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.15-5A29E4?style=flat-square&logo=axios&logoColor=white)

### Admin Dashboard
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-Express%205.2-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.2-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%209.4-13AA52?style=flat-square&logo=mongodb&logoColor=white)

### Integrations & Tools
![Stripe](https://img.shields.io/badge/Stripe-Payment-635BFF?style=flat-square&logo=stripe&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-Payment-022E8A?style=flat-square&logo=razorpay&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Management-3448C5?style=flat-square&logo=cloudinary&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=flat-square&logo=json-web-tokens&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-Security-2F7E31?style=flat-square&logo=&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-File%20Upload-FF6B6B?style=flat-square&logo=&logoColor=white)

---

## 📋 Project Overview

A modern, full-stack e-commerce platform with a responsive frontend, powerful admin dashboard, and secure backend API. Features include product management, user authentication, payment integration, and real-time order tracking.

## 🎯 Features

- **User Authentication** - Secure login & registration with JWT
- **Product Catalog** - Browse and filter products
- **Shopping Cart** - Add/remove items and manage quantities
- **Secure Checkout** - Multiple payment options (Stripe & Razorpay)
- **Admin Dashboard** - Manage products, orders, and users
- **Image Management** - Cloudinary integration for product images
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS
- **Order Management** - Track and manage customer orders

## 📁 Project Structure

```
Ecommerce-Website/
├── frontend/          # React + Vite customer-facing application
├── admin/            # React + Vite admin dashboard
└── backend/          # Express.js API server
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Stripe & Razorpay accounts for payment integration
- Cloudinary account for image management

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sangitatripathy/Ecommerce-Website.git
   cd Ecommerce-Website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create .env file with required variables
   npm run server
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Admin Dashboard Setup**
   ```bash
   cd admin
   npm install
   npm run dev
   ```

## 🔧 Environment Variables

Create a `.env` file in the backend directory with:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_SECRET=your_razorpay_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🌐 Deployment

- **Frontend & Admin**: Hosted on Vercel
- **Backend**: Hosted on Vercel

[**🔗 Visit Live Website**](https://forever-backend-eight-red.vercel.app)

## 📝 License

This project is open source and available under the ISC License.

## 👤 Author

**Sangita Tripathy**
- GitHub: [@sangitatripathy](https://github.com/sangitatripathy)

---

⭐ If you found this project helpful, please consider giving it a star!
