import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import FrontPage from './routes/FrontPage.jsx'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import Home from './routes/Home.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <FrontPage />},
      { path: 'login', element: <Login />},
      { path: 'register', element: <Register />},
      { path: 'home', element: <Home />},
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
