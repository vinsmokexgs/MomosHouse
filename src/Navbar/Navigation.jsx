import React from "react";
import { NavLink } from "react-router-dom";
import momologo from "../assets/momo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
   const {User, logout, isAuthenticated} = useAuth0();
   console.log(isAuthenticated)

  const { state } = useContext(CartContext);

  let totalItem = state.items.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);

  return (
    <div className=" border-2 flex justify-between ju  items-center gap-3   ">
      <div className=" flex items-center">
        <img src={momologo} alt="" />
        <NavLink to="/"> Momos</NavLink>
      </div>
      <div className=" flex justify-between gap-3 ">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/alleregy">Allergy Advice</NavLink>
        <NavLink to="/cartPage" className=" relative">
          <span
            className="absolute  bg-gray-200 rounded-full 
           text-center inline-block h-6 w-6   left-2 -top-3   text-red-500   "
          >
            {totalItem}
          </span>
          <BsCart4 size={28} />
        </NavLink>
        {isAuthenticated ?(
          <button onClick={()=>{
            logout();
          }}>logout</button>
        ):(
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      <div className=" flex  justify-center items-center gap-3">
        <NavLink target="_blank" to="https://www.facebook.com/">
          <FaFacebookF />
        </NavLink>
        <FaTiktok />
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FiInstagram />
        </NavLink>

        <NavLink
          className="bg-orange-700 rounded-3xl  text-white  "
          to="/contact"
        >
          Contact Us
        </NavLink>
        <NavLink
          className= " "
          to="/profile"
        > 
          <img className="h-7 rounded-full" src={User?.picture} alt="" />
        </NavLink>
        
      </div>
    </div>
  );
}

export default Navigation;
