import React, { useContext } from 'react'
import { GlobalData } from '../App'

import './Main.css'

const Service = () => {
  const Light = { backgroundColor: "white", color: "black" }
  const Dark = { backgroundColor: "black", color: "white" }

  const { darkTheme } = useContext(GlobalData)

  return (
    <div className="MainContainer" style={darkTheme ? Dark : Light}>
      <h1>Our service are not available</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</p>
    </div>
  )
}

export default Service