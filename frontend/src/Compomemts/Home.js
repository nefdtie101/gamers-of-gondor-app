// This is the page that will display before user will sine in.
import React from "react";
import './css/home.css'
import logo from '../img/goglogo.png'
import Footer from "./Footer";

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='Home'>
                <div className='nav'><a href='/login'>Login</a></div>
                <h1>Gamers of Gondor</h1>
                <h3>A community of Gamers</h3>
                <img src={logo} alt='Gog logo'/>
                <h2>A brief history of Gamers of Gondor</h2>
                <p>
                    We started out as a group of friends in high-school just casually playing games together.
                    Over the years our small group expanded. Soon we had people from different schools joining our server.
                    As time went by we starting expanding all over South-Africa. Eventually we even reached certain individuals
                    over-seas. With our group growing older, we had more assets at our disposal.
                </p>
                <h2>Why sign up ?</h2>
                <p>
                    You can join our e-sports sports community and play agents us or other clans. Challenge other people
                    for the king metal and win metals and increase your skills.
                </p>
                <Footer/>
            </div>
        )
    }
}

export default Home
