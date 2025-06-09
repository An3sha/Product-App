# Product Management Full-Stack Application

A modern full-stack application for product management, featuring a React frontend with Material-UI and a Node.js/Express backend with MongoDB.

## 🚀 Features

### Frontend
- Modern, responsive UI with Material-UI components
- State management using Zustand
- Real-time product updates
- Toast notifications for user feedback
- Modal-based product creation and editing

### Backend
- RESTful API with Express.js
- MongoDB database integration
- Error handling middleware
- CORS enabled
- Environment variable configuration

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Material-UI (MUI)
- Zustand (State Management)
- React Router DOM
- Axios (for API calls)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- Dotenv for environment variables

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-management-app
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
NODE_ENV=development
```

5. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Development

### Running Backend
```bash
# From root directory
npm run dev
```

### Running Frontend
```bash
# From frontend directory
npm run dev
```

The backend will be available at `http://localhost:3000`
The frontend will be available at `http://localhost:5173`

## 🏗️ Build

### Backend
```bash
npm run build
```

### Frontend
```bash
cd frontend
npm run build
```

## 🔑 Key Features

### Frontend
- **State Management**: Zustand for global state management
- **Components**: ProductCard, UpdateProductModal, Toast, Navbar
- **API Integration**: RESTful API integration with error handling

### Backend
- **API Routes**: RESTful endpoints for CRUD operations
- **Database**: MongoDB with Mongoose schemas
- **Authentication**: JWT-based authentication
- **File Upload**: Multer middleware for image uploads
- **Error Handling**: Centralized error handling middleware

## 🎨 Styling

- Material-UI (MUI) for component styling
- Custom theme with yellow/blue color scheme
- Responsive design for all screen sizes



