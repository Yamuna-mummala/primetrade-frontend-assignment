# PrimeTrade - Frontend Development Assignment

A full-stack authentication-based dashboard application built using:

## 🚀 Tech Stack

Frontend:
- React
- React Router
- Tailwind CSS
- Axios

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

## 🔐 Features

- User Registration
- Secure Login using JWT
- Password hashing with bcrypt
- Protected Dashboard Route
- Logout functionality
- Clean responsive UI

---

## 🛠 Setup Instructions

### 1️⃣ Clone the Repository

git clone <your-repo-link>

---

### 2️⃣ Backend Setup

cd server
npm install

Create a `.env` file in server folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Run backend:

npm start

---

### 3️⃣ Frontend Setup

cd client
npm install
npm start

---

## 📌 Notes

- JWT is stored in localStorage
- ProtectedRoute prevents unauthorized access
- Clean folder structure used (routes/controllers/models)

