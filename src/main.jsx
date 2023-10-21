import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Error from './pages/Error.jsx';
import Root from './components/root/Root.jsx';
import Addproduct from './pages/Addproduct.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Products from './components/routes/Products.jsx';
import Allbrands from './components/All/Allbrands.jsx';
import Productdetails from './components/routes/Productdetails.jsx';
import Privateroute from './components/routes/Privateroute.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import Mycart from './pages/Mycart.jsx';
import Form from './pages/Form.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [{
      path: '/',
      element: <Home></Home>

    },

    {
      path: '/addproduct',
      element: <Addproduct></Addproduct>
    },

    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    { 
      path:'/mycart',
      element:<Mycart></Mycart>

    },
    {
      path:'/update',
      element:<Form></Form>

    },
    {
      path: '/products',
      element: <Products></Products>,
      loader: () => fetch('http://localhost:5000/products')
    },
 {
 
  
    path: '/products/:brandName',
    element: <Allbrands></Allbrands>,
    // loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`)
  
  
 },
 {
  path:'/product/:brandName/:_id',
  element:<Productdetails></Productdetails>,
  loader: () => fetch('http://localhost:5000/products')
 }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
