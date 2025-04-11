import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Alleregy from "./Pages/Alleregy";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navigation from "./Navbar/Navigation";
import Footer from "./Pages/Footer";
import Login from "./Auth/Login";
import Profile from "./Auth/Profile";
import Failure from "./payment/Failure";
import Payment from "./payment/Payment";
import Success from "./payment/Success";
import ProductDescription from "./Pages/ProductDescription";
import ProtectedRoutes from "./Auth/ProtectedRoutes";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div>
      <Navigation/>
        <Routes>
          <Route path="/" element={<ProtectedRoutes components={<Home/>}/>} />
          <Route path="/alleregy" element={<ProtectedRoutes components={<Alleregy/>}/>} />
          <Route path="/about" element={<ProtectedRoutes components={<About/>}/>} />
          <Route path="/contact" element={<ProtectedRoutes components={<Contact/>}/> } />
          <Route path="/menu" element={<ProtectedRoutes components={<Menu/>} />} />
          <Route path="/services" element={<ProtectedRoutes components={<Services/>}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<ProtectedRoutes components={<Payment/>} />} />

        <Route path="/success" element={<Success />} />
        <Route path="/cartPage" element={<CartPage />} />

        <Route path="/failure" element={<Failure />} />
        <Route path="/productDescription/:id"
          element={<ProductDescription />}
        />
      </Routes>
        
      <Footer />
    </div>
  );
}

export default App;
