# Easygenerator Task

A production-ready full-stack authentication system built with NestJS, MongoDB, React, and TypeScript.

## 📁 Project Structure

This is a monorepo using pnpm workspaces:

```
eg-task/
├── server/               # NestJS backend
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── client/               # React frontend
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yaml
└── package.json          # Workspace root
├── .github/              # CI/CD workflows
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Docker** v20.10+ and **Docker Compose** v2.0+
- **Node.js** v22+ (for local development without Docker)
- **pnpm** v10+ (for local development without Docker)
- **MongoDB** (for local development without Docker or a cloud instance)
- **Git**

### Installation

1. **Clone the repository**

```bash
   git clone <your-repo-url>
   cd eg-task
```

2. **Install all dependencies**

```bash
   npm install
```

3. **Configure Backend**

```bash
   cd packages/backend
   cp .env.example .env
   # Edit .env with your MongoDB URI and secrets
```

4. **Configure Frontend**

```bash
   cd packages/frontend
   cp .env.example .env
   # Edit .env with your API URL
```

### Running the Application

**Option 1: Run both simultaneously (recommended)**

```bash
npm run dev
```

**Option 2: Run separately**

```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

### Building for Production

```bash
npm run build:all
```

## 📚 Documentation

- **API Documentation**: http://localhost:3000/api/docs (Swagger)
- **Backend README**: [packages/backend/README.md](packages/backend/README.md)
- **Frontend README**: [packages/frontend/README.md](packages/frontend/README.md)

## ✨ Features

### Backend

- ✅ User registration with validation
- ✅ JWT authentication (access + refresh tokens)
- ✅ Protected endpoints with guards
- ✅ Password hashing with bcrypt
- ✅ MongoDB with Mongoose
- ✅ API documentation with Swagger
- ✅ Logging with Winston
- ✅ Rate limiting
- ✅ Security headers with Helmet
- ✅ Input validation

### Frontend

- ✅ React 18 with TypeScript
- ✅ Form validation
- ✅ Protected routes
- ✅ Token management
- ✅ Responsive design
- ✅ Modern UI components

## 🛠️ Tech Stack

### Backend

- NestJS
- MongoDB + Mongoose
- Passport JWT
- Winston (logging)
- Swagger (documentation)
- class-validator

### Frontend

- React 18
- TypeScript
- React Router v6
- Axios
- Tailwind CSS / Material-UI (choose one)

## 📜 Available Scripts

From the root directory:

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Run both frontend and backend |
| `npm run dev:backend`  | Run backend only              |
| `npm run dev:frontend` | Run frontend only             |
| `npm run build:all`    | Build both projects           |
| `npm run lint:all`     | Lint all workspaces           |

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Refresh token rotation
- Request rate limiting
- Helmet security headers
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## 🌐 API Endpoints

| Method | Endpoint             | Description          | Protected |
| ------ | -------------------- | -------------------- | --------- |
| POST   | `/api/auth/signup`   | Register new user    | No        |
| POST   | `/api/auth/signin`   | Login user           | No        |
| POST   | `/api/auth/refresh`  | Refresh access token | No        |
| POST   | `/api/auth/logout`   | Logout user          | Yes       |
| GET    | `/api/users/profile` | Get user profile     | Yes       |

## 📝 License

MIT

## 👤 Author

[Your Name]
