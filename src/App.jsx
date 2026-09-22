import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CourseList from "./pages/CourseList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import AddCourse from "./pages/AddCourse";
import UpdateCourse from "./pages/UpdateCourse";
import Checkout from "./pages/Checkout";

import CartProvider from "./context/CartContext";

import { Toaster } from "react-hot-toast";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,

    children: [
      // HOME PAGE
      {
        index: true,
        element: <Home />,
      },

      // DESIGNS PAGE
      {
        path: "designs",
        element: <CourseList />,
      },

      // CHECKOUT
      {
        path: "checkout",
        element: <Checkout />,
      },

      // UPDATE PRODUCT
      {
        path: "update/:id",
        element: <UpdateCourse />,
      },

      // LOGIN
      {
        path: "login",
        element: <Login />,
      },

      // SIGN UP
      {
        path: "signup",
        element: <SignUp />,
      },

      // CART
      {
        path: "cart",
        element: <Cart />,
      },

      // ADD PRODUCT
      {
        path: "add",
        element: <AddCourse />,
      },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,

          style: {
            background: "#1f2937",
            color: "#fff",
            textAlign: "center",
            borderRadius: "10px",
            padding: "10px 15px",
          },
        }}
      />

      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
