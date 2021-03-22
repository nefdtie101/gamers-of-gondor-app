// This is the login screen component
import React from "react";
import logo from "../img/goglogo.png";
import MyFooter from "./Footer";
import './css/login.css'

function loginPost(url='',data={}){
    return fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
}

// This is the login component
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.signUp=this.signUp.bind(this)
        this.login=this.login.bind(this)
    }
    signUp(){
        window.location.href='sign-up'
    }
    login(){
        const UserName = document.getElementById('userName').value
        const Password = document.getElementById('pass1').value
        const data = {
            "UserName":UserName,
            "Password":Password
        }
        loginPost('/login-token',data)
            .then((token)=> {
                if(token.token === 'error'){
                    alert('Please check your credentials')
                }
                else {
                    localStorage.setItem('token',token.token)
                    window.location.href='/home'
                }
            })




    }

    render() {
        return(
            <div className='login'>
                <img alt='GoG logo' src={logo}/>
                <h2>Login</h2>
                <input id='userName' placeholder='Username' defaultValue=''/><br/>
                <input id='pass1' placeholder='Password' type='Password' defaultValue='' /><br/>
                <button onClick={this.login} >Submit</button>
                <button onClick={this.signUp} >Sign up</button>
                <div className='myFooter'><MyFooter/></div>
            </div>
        )
    }
}
export default Login
