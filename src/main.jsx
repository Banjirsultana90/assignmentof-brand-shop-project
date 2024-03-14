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
import { Toaster } from 'react-hot-toast';
import Contact from './components/footer/Contact.jsx';
import Checkout from './components/routes/Checkout.jsx';
import Success from './components/routes/Success.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [{
      path: '/',
      element: <Home></Home>

    },
    {path:'/contact',
    element:<Contact></Contact>

    },

    {
      path: '/addproduct',
      element: <Privateroute><Addproduct></Addproduct></Privateroute>
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
      element:<Privateroute><Mycart></Mycart></Privateroute>,
      loader:()=>fetch('https://brand-shop-server-mauve-nu.vercel.app/cart')

    },
    {
      path:'/update/:id',
      element:<Privateroute><Form></Form></Privateroute>,
      loader:({params})=>fetch(`https://brand-shop-server-mauve-nu.vercel.app/${params.id}`)

    },
    {
      path: '/products',
      element:<Products></Products>,
      loader: () => fetch('https://brand-shop-server-mauve-nu.vercel.app/products')
    },
 {
 
  
    path: '/products/:brandName',
    element: <Allbrands></Allbrands>,
   
  
  
 },
 {
  path: "/checkout",
  element: <Checkout></Checkout>,
},
{
  path: "/payment/success/:tranId",
  element: <Success></Success>,
},
 {
  path:'/product/:brandName/:_id',
  element:<Privateroute><Productdetails></Productdetails></Privateroute>,
  loader: () => fetch('https://brand-shop-server-mauve-nu.vercel.app/products')
 }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
    <Toaster />
  </React.StrictMode>,
)
