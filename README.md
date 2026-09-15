# ShopNest — Full-Stack MERN E-Commerce Platform

A full-stack e-commerce application built with the MERN stack, with authentication, product management, orders, admin analytics, payments, image uploads, and REST APIs.

## Highlights

- Product browsing, cart, checkout, and order history
- JWT-based authentication and protected routes
- Admin dashboard and product/order management
- Razorpay payment integration
- Cloudinary/Multer image handling
- MongoDB + Mongoose data layer
- REST API collection for testing with Postman

## Tech Stack

**Frontend:** React, Redux Toolkit, React Router, React Toastify  
**Backend:** Node.js, Express.js, JWT, bcryptjs  
**Database:** MongoDB, Mongoose  
**Integrations:** Razorpay, Cloudinary, Nodemailer  
**Tools:** Git, GitHub, Postman, npm

## Project Structure

```text
shopnest-ecom-MERN-master/
├── backend/     # Express API, auth, products, orders, payments
├── frontend/    # React client
└── ShopNest_Postman_Collection.json
```

## Run Locally

Requirements: Node.js 18+, MongoDB, and npm.

```bash
git clone https://github.com/kaptan009/E-commerce.git
cd E-commerce/shopnest-ecom-MERN-master
npm run install-all
npm run dev
```

Create `backend/.env` from `backend/.env.example` and provide your own local/database and third-party credentials before starting the application.

For a production build:

```bash
npm run build
```

## API Testing

Import `ShopNest_Postman_Collection.json` into Postman to explore the available API requests.

## Security

- Never commit `.env` files or real API credentials.
- Use test/sandbox credentials for payment integrations during development.
- Use strong, unique secrets for JWT and other application credentials.

## Attribution

The repository's existing package metadata credits **Shivansh Vasu** as the original author. That attribution has been intentionally preserved.

## Author / Maintainer

**Himanshu Prajapati**  
GitHub: https://github.com/kaptan009  
LinkedIn: https://www.linkedin.com/in/himanshu-prajapati-bb752326b/

---

If you find the project useful, feel free to explore the code and share feedback.