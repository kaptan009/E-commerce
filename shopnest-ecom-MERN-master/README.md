# ShopNest — Full-Stack MERN E-Commerce Platform

A full-stack e-commerce application built with **React, Redux Toolkit, Node.js, Express, and MongoDB**. The project includes authentication, product management, cart functionality, orders, admin workflows, image uploads, and Razorpay payment integration.

> **Note:** This repository contains the existing ShopNest codebase. Original package metadata credits the original author, Shivansh Vasu; that attribution has intentionally been preserved.

## 🚀 Highlights

- 🛍️ Product browsing and shopping cart
- 🔐 JWT-based authentication and protected routes
- 👤 User profiles and order history
- 🛠️ Admin dashboard and product/order management
- 💳 Razorpay payment integration
- ☁️ Cloudinary image upload integration
- 📦 MongoDB persistence with Mongoose
- 🧪 Postman API collection for endpoint testing
- ⚡ Concurrent frontend/backend development workflow

## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Redux Toolkit, React Router, React Toastify |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| Payments | Razorpay |
| Media | Cloudinary, Multer |
| API Testing | Postman |

## 📁 Project Structure

```text
shopnest-ecom-MERN-master/
├── backend/                 # Express API, auth, models and business logic
├── frontend/                # React application
├── ShopNest_Postman_Collection.json
├── package.json
└── README.md
```

## ⚙️ Local Setup

### Prerequisites

- Node.js 18+
- MongoDB
- npm

### 1. Install dependencies

From `shopnest-ecom-MERN-master/`:

```bash
npm run install-all
```

### 2. Configure environment variables

Create `backend/.env` with the values required by your local environment. Never commit real API keys, database credentials, JWT secrets, or payment secrets.

Example:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 3. Start development servers

```bash
npm run dev
```

The frontend and backend run concurrently using the root development script.

### 4. Build the frontend

```bash
npm run build
```

## 🧪 API Testing

Import `ShopNest_Postman_Collection.json` into Postman to test the available API endpoints. Keep authentication tokens and environment-specific secrets out of committed files.

## 🔒 Security Notes

- Do not commit `.env` files or production credentials.
- Use test credentials for payment development.
- Rotate any credential that may have been exposed in Git history.
- Use strong secrets for JWT and database access.

## 👨‍💻 Repository

[View the project on GitHub](https://github.com/kaptan009/E-commerce)
