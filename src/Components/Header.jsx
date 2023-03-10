import React, { useContext } from 'react'
import { GlobalData } from '../App'
import './Header.css'
import image from './image/image.jpg'
import { Link } from 'react-router-dom'

const Header = () => {

    const buttonLight = { backgroundColor: "white", color: "black" }
    const buttonDark = { backgroundColor: "#0f172a", color: "white" }

    const { darkTheme, setdarkTheme } = useContext(GlobalData)
    return (
        <div className="Header">

            <div className="headerUpper">
                <p>I have changed theme to <span>{darkTheme ? "Dark" : "Light"}</span></p>
            </div>

            <div className="headerBottom">

                <div className="logo">
                    <img src={image} alt="Img" />
                </div>

                <div className="tab">
                <ul>
             <Link to="/Home">
            <li>Home</li>
             </Link >                              
              <Link to="/Contact">
            <li>Contact</li>
              </Link>                 
              <Link to="/Service">
            <li>Service</li>
              </Link>  
        </ul>

                </div>

                <div className="toggleButton">
                    <button onClick={() => {
                        setdarkTheme(!darkTheme)
                    }} style={darkTheme ? buttonLight : buttonDark}>{darkTheme ? "toggle theme to Light" : "toggle theme to Dark"}</button>


                </div>
            </div>

        </div>

    )
}

export default Header