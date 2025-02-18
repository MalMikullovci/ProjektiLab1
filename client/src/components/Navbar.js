import React, { useState } from "react"
import { MenuData } from "./MenuData"
import { Link, useLocation } from 'react-router-dom'
import "./Cart"
import LogoImage from '../img/Logo.png'
import "../styles/NavbarStyle.css"

// Krijimi i komponentit Navbar
const Navbar = (props) => {

  // Krijimi i state 'clicked' dhe funksioni 'setClicked' duke perdorur useState
  const [clicked, setClicked] = useState(false)
  const location = useLocation()

  // Krijimi i funksionit 'handleClick' per ndryshimin e gjendjes se 'clicked'
  const handleClick = () => {
    setClicked(!clicked)
  }

  // Renderimi i HTML per Navbar
  return (
    <nav className="NavbarItems">
      {/* Krijimi i logose */}
      <Link to="/" className="logo" style={{ textDecoration: 'none' }} title="Home">
        <img src={LogoImage} alt="Logo" style={{ width: '150px', height: 'auto', marginBottom: '10px' }} />
      </Link>

      {/* Krijimi i ikonave te menyse */}
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Krijimi i listes se menyse */}
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {

          const isActive = location.pathname === item.url
          const linkClass = isActive ? `${item.cName} active` : item.cName

          return (
            <li key={index}>
              <Link to={item.url} className={linkClass}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar