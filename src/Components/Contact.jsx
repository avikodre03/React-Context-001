import React, { useContext } from 'react'
import { GlobalData } from '../App'

import './Main.css'

const Contact = () => {
  const Light = { backgroundColor: "white", color: "black" }
  const Dark = { backgroundColor: "black", color: "white" }

  const { darkTheme } = useContext(GlobalData)

  return (
    <div className="MainContainer" style={darkTheme ? Dark : Light}>
      <h1>You can mail me help@geekster.in</h1>
    </div>
  )
}

export default Contact