// This is the account component
import React from "react";
import './css/account.js.css'

class Account extends React.Component{
    constructor(props) {
        super(props);
        this.edit=this.edit.bind(this)
    }
    edit(){
        window.location.href='/home/account/edit'
    }
    render() {
        return(
            <div>
                <h2>GoG Username</h2>
                <h3>{this.props.user}</h3>
                <h2>Email</h2>
                <h3>{this.props.email}</h3>
                <h2>Steam Username</h2>
                <h3>{this.props.SteamUser}</h3>
                <h2>Epic Username</h2>
                <h3>{this.props.EpicUser}</h3>
                <h2>Ubisoft Username</h2>
                <h3>{this.props.UbisoftUser}</h3>
                <h2>Origin Username</h2>
                <h3>{this.props.OriginUser}</h3>
                <h2>Discord Username</h2>
                <h3>{this.props.DiscordUser}</h3>
                <button className='edit' onClick={this.edit}>Edit</button>

            </div>
        )
    }
}
export default Account
