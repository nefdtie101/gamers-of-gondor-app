// This is the react component that will edit your details
import React from "react";
import './css/accountEdit.css'
import Footer from "./Footer";

function sendData(url=``,data={}){
    const token = localStorage.getItem('token')
    return fetch(url,{
        method:'POST',
        headers:{
            "Content-type":"application/json",
            "Authorization": `Bearer ${token}`
        },
            body: JSON.stringify(data)
    })
}


class AccountEdit extends React.Component {
    constructor(props) {
        super(props);
        this.updateInfo=this.updateInfo.bind(this)
        this.updatePassword=this.updatePassword.bind(this)
    }
    updateInfo(e){
        const id = e.target.id
        const whatToUpdate = id+'User'
        const update = document.getElementById(id+'ID').value
        sendData('/update-this',{
            'id' : whatToUpdate,
            'update': update
        })
            .then((res)=>console.log('I Gust send some data'))
        alert('Your Info has been updated')
        window.location.href='/home/account/edit'
    }
    updatePassword(){
        const pass1 = document.getElementById('pass1').value;
        const pass2 = document.getElementById('pass2').value;
        if (pass1===pass2){
            sendData('/update-this',{
                'id' :'Password' ,
                'update': pass2
            })
                .then((res)=>console.log('I Gust send some data'))
            alert('Your Info has been updated')
            window.location.href='/home/account/edit'

       }

    }
    render() {
        return (
            <div>
                <h1>Edit your credentials</h1>
                <div className='input'>
                    <input id='SteamID' placeholder='Steam Username'/><br/>
                    <button onClick={this.updateInfo} id='Steam'>Update</button><br/>
                    <input id='EpicID' placeholder='Epic Username'/><br/>
                    <button onClick={this.updateInfo} id='Epic'>Update</button><br/>
                    <input id='UbisoftID' placeholder='Ubisoft Username'/><br/>
                    <button onClick={this.updateInfo} id='Ubisoft' >Update</button><br/>
                    <input id='OriginID' placeholder='Origin Username'/><br/>
                    <button onClick={this.updateInfo} id='Origin'>Update</button><br/>
                    <input id='DiscordID' placeholder='Discord Username'/><br/>
                    <button onClick={this.updateInfo} id='Discord'>Update</button><br/>
                </div>
                <div className='pass'>
                    <input type='Password' id='pass1' placeholder='Password'/><br/>
                    <input type='Password' id='pass2' placeholder='Password'/><br/>
                    <button onClick={this.updatePassword}>Update</button><br/>
                </div>
                    <Footer/>
            </div>
        )
    }
}
export default AccountEdit
