# Employee Directory

A simple and responsive **Employee Directory** web application built using the **MERN Stack (MongoDB, Express.js, React, and Node.js)**. This application allows users to manage employee records efficiently by performing CRUD operations.

---

## 📌 Project Overview

The Employee Directory is designed to help organizations manage employee information in a simple and user-friendly interface. Users can add new employees, view employee details, and delete employee records.

---

## ✨ Features

- ➕ Add new employees
- 👥 View all employees
- 🗑️ Delete employees
- 📱 Responsive user interface
- 🔄 Real-time updates using REST APIs
- 🌐 MongoDB database integration

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
Employee_Directory/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/Vyshu15-chowdary/Employee_Directory.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Fetch all employees |
| POST | `/api/employees` | Add a new employee |
| DELETE | `/api/employees/:id` | Delete an employee |

---

## 📷 Screenshots

You can add screenshots of your application here.

Example:

- Home Page
- Add Employee Form
- Employee List

---

## 🔮 Future Enhancements

- ✏️ Update employee details
- 🔍 Search employees
- 🎯 Filter by department
- 📄 Pagination
- 🔐 User Authentication
- 📊 Dashboard with statistics

---

## 👩‍💻 Author

**Yendluri Vyshnavi**

GitHub: https://github.com/Vyshu15-chowdary

---

## 🆔 Internship Details

**Intern ID:** **CITS5192**

---

## 📄 License

This project is developed for learning and internship purposes.

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
