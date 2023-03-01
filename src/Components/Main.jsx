import React, { useContext } from 'react'
import { GlobalData } from '../App'

import './Main.css'
const Main = () => {
    const Light = { backgroundColor: "white", color: "black" }
    const Dark = { backgroundColor: "black", color: "white" }

    const { darkTheme } = useContext(GlobalData)

    return (
        <div className="MainContainer" style={darkTheme ? Dark : Light}>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam numquam sunt distinctio totam, exercitationem labore nobis facilis voluptatem suscipit.
                Rem minima nulla recusandae, nihil aliquam voluptas laboriosam accusamus cumque vero similique fugiat aperiam maxime mollitia accusantium distinctio
                iure quas molestias ipsam sit ab eaque sunt?  Eligendi quia necessitatibus porro odio praesentium,
                quo veritatis saepe nihil ipsa, fuga voluptatem reprehenderit accusamus.</p>
        </div>
    )
}

export default Main