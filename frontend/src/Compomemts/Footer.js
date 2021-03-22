/*This is the generic footer component */

import React from "react";
import discord from "../img/discord.png";
import copy from "../img/Copywrite.png"
import './css/footer.css'


class MyFooter extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='footer'>
                <footer >
                    <a href='https://discord.gg/kSnwd7JE2H'><img src={discord}/></a>
                    <p>©Gamers of Gondor</p>
                </footer>
            </div>
        )
    }
}
export default MyFooter

