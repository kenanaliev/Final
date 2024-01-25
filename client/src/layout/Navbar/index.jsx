import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav id='nav'>
         <div className="wines">
            <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li>About</li>
                <li>Wines</li>
                <li>Shop</li>
                <li>Contact</li>
                <li><NavLink to={"/Add"}>Add</NavLink></li>
            </ul>
         </div>
          
        </nav>

    </div>
  )
}

export default Navbar