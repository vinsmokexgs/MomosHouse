import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

function NavigationToMenu() {
  return (
    <div className=" mt-5">
            <NavLink
              className=" bg-[#0C6967] p-4 rounded-3xl text-white flex justify-center items-center w-60 gap-2  "
              to="/menu"
            >
              {" "}
              <span>Explore Food Menu </span> <IoIosArrowRoundForward />
            </NavLink>
            </div>
  )
}

export default NavigationToMenu;
