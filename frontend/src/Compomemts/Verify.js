// This is the verify component
import React from "react";
import './css/verify.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from "./Footer";

function code(url ='',data={}){
    const token = localStorage.getItem('token')
    return fetch(url, {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
}



class Verify extends React.Component{
    constructor(props) {
        super(props);
        this.getCode=this.getCode.bind(this)
        this.verify=this.verify.bind(this)
    }
    getCode(){
       code(`/verify`,{'mail':this.props.email})
           .then(window.location.href='/home/code')
    }
    verify(){
        const userCode = document.getElementById('code').value
        code(`/code-verify`,{'mail':this.props.email,'code':userCode})
            .then(window.location.href='/home')
    }

    render() {
        return(
           <div className='verify'>
               <h1>Please Verify your email.</h1>
               <h2>{this.props.email}</h2>
               <Route exact={true} path='/home'><button onClick={this.getCode} >Verify</button></Route>
               <Route exact={true} path='/home/code'>
                   <h2>Please check your email and enter your code</h2>
                   <input id='code' type='Number'/><br/>
                   <button onClick={this.verify} >Submit</button>
               </Route>
               <div className='myFooter'><Footer/></div>
           </div>
        )
    }
}
export default Verify
