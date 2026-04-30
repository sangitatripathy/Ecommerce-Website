# 🛒 Ecommerce Website

[![Live Demo](https://img.shields.io/badge/🔗%20VISIT%20LIVE%20WEBSITE-Visit%20Now-1f6feb?style=for-the-badge&logo=vercel&logoColor=white&logoWidth=20)](https://ecommerce-website-iota-gold.vercel.app)

## 🚀 Tech Stack

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white&logoWidth=20" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white&logoWidth=20" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&logoWidth=20" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React%20Router-7.13-F44250?style=for-the-badge&logo=react-router&logoColor=white&logoWidth=20" alt="React Router" />
  <img src="https://img.shields.io/badge/Axios-1.15-5A29E4?style=for-the-badge&logo=axios&logoColor=white&logoWidth=20" alt="Axios" />
</p>

### Admin Dashboard
<p>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white&logoWidth=20" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white&logoWidth=20" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&logoWidth=20" alt="Tailwind CSS" />
</p>

### Backend
<p>
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white&logoWidth=20" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express&logoColor=white&logoWidth=20" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose%209.4-13AA52?style=for-the-badge&logo=mongodb&logoColor=white&logoWidth=20" alt="MongoDB" />
</p>

### Integrations & Tools
<p>
  <img src="https://img.shields.io/badge/Stripe-Payment-635BFF?style=for-the-badge&logo=stripe&logoColor=white&logoWidth=20" alt="Stripe" />
  <img src="https://img.shields.io/badge/Razorpay-Payment-022E8A?style=for-the-badge&logo=razorpay&logoColor=white&logoWidth=20" alt="Razorpay" />
  <img src="https://img.shields.io/badge/Cloudinary-Image%20Management-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white&logoWidth=20" alt="Cloudinary" />
  <img src="https://img.shields.io/badge/JWT-Security-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white&logoWidth=20" alt="JWT" />
  <img src="https://img.shields.io/badge/Bcrypt-Encryption-2F7E31?style=for-the-badge&logoColor=white&logoWidth=20" alt="Bcrypt" />
  <img src="https://img.shields.io/badge/Multer-File%20Upload-FF6B6B?style=for-the-badge&logoColor=white&logoWidth=20" alt="Multer" />
</p>

---

## 📋 Project Overview

A modern, full-stack e-commerce platform with a responsive frontend, powerful admin dashboard, and secure backend API. Features include product management, user authentication, payment integration, image management, and comprehensive order tracking.

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

[**🔗 Visit Live Website**](https://ecommerce-website-iota-gold.vercel.app)

## 📝 License

This project is open source and available under the ISC License.

## 👤 Author

**Sangita Tripathy**
- GitHub: [@sangitatripathy](https://github.com/sangitatripathy)

---

⭐ If you found this project helpful, please consider giving it a star!
