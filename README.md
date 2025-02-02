# 🔐 React Authentication Template

A **modern authentication system** built with **React, TypeScript, Vite, React Query, and ShadCN UI**.  
Includes **JWT authentication, protected routes, profile management, and API handling**.

🚀 **Features:**
- ✅ **Sign Up & Login** with JWT authentication
- ✅ **Token storage & validation** (localStorage)
- ✅ **Protected Routes** for authenticated users
- ✅ **API integration** with Axios & React Query
- ✅ **UI components from ShadCN UI + TailwindCSS**
- ✅ **Deployed on Vercel**


## ⚡ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **State Management**: React Context
- **API Handling**: Axios + React Query
- **Form Validation**: React Hook Form + Zod
- **UI Components**: ShadCN UI + TailwindCSS
- **Routing**: React Router
- **Deployment**: Vercel

---

## **📝 Explanation of Key Folders**
| 📂 **Folder** | 📌 **Description** |
|--------------|------------------|
| **`src/assets`** | Static assets (images, fonts, etc.) |
| **`src/components/auth`** | Authentication components (Sign Up, Login, etc.) |
| **`src/components/ui`** | UI components (buttons, inputs, forms) |
| **`src/context`** | Global context providers (profile, theme) |
| **`src/hooks`** | Custom hooks for authentication, API requests, etc. |
| **`src/layouts`** | Page layout components |
| **`src/routes`** | Application routes (protected & authorized routes) |
| **`src/utils`** | Utility functions (token handling, theme settings) |
| **`src/api.ts`** | API request handling with Axios |
| **`config/queryClient.ts`** | React Query client setup |
| **`vite.config.ts`** | Vite configuration file |

---

## **🚀 Getting Started**

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
First, clone the project from GitHub:
```sh
git clone https://github.com/i-vanb/react-auth.git
cd react-auth

npm install
or
yarn install
```

### **2️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add the following environment variables:
```sh
VITE_API_BASE_URL=YOUR_BACKEND_API_BASE_URL
```

### **3️⃣ Start the Development Server**


## 🚀 Improvements
- [ ] **Replace Local Storage with Cookies**: Use HTTP-only cookies for storing JWT tokens.