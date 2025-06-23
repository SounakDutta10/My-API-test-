# 📚 Book API Server with Tests

A simple RESTful Book Management API built with Node.js, Express, and MongoDB — now fully tested with **unit**, **integration**, and **API** tests using Jest and Supertest.

---

## 🔌 API Overview

This API provides basic CRUD operations for managing books.

### 🛠️ Available Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/books`     | Fetch all books          |
| POST   | `/api/books`     | Create a new book        |

---

## 💻 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Testing**: Jest, Supertest

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/api-server-with-tests.git
cd api-server-with-tests
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start MongoDB (Locally or via Docker)
Make sure MongoDB is running on `mongodb://localhost:27017/testdb`.

### 4. Run the Server
```bash
npm start
```

The server will start on `http://localhost:3000`.

---

## 🧪 Running Tests

To run all tests (unit, integration, and API):
```bash
npm test
```

This will also generate a full **test coverage report**.

---

## 📈 Test Coverage

Achieved over **70%** total coverage across:
- Statements
- Branches
- Functions
- Lines


---

## 🧰 Testing Tools Used

| Tool                  | Purpose                          |
|-----------------------|----------------------------------|
| **Jest**              | Test runner and coverage checker |
| **Supertest**         | HTTP assertions for API testing  |
| **mongodb-memory-server** (optional) | In-memory MongoDB for integration tests |

---

## 📂 Folder Structure

```bash
.
├── controllers/          # Business logic
├── models/               # Mongoose models
├── routes/               # API routes
├── tests/
│   ├── unit/             # Unit tests (mocked DB)
│   ├── integration/      # Integration tests (real DB)
│   └── api/              # API endpoint tests
├── app.js                # Express app
├── server.js             # Entry point
├── package.json          # Dependencies & scripts
└── README.md             # Project documentation
```

---

## 🧑‍💻 Author

**Your Name**  
GitHub: [@SounakDutta10](https://github.com/SounakDutta10)

---

## 📃 License

This project is licensed under the MIT License.
