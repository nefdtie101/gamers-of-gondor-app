// This is the the sine up page

import React from 'react'
import logo from '../img/goglogo.png'
import './css/signup.css'
import MyFooter from "./Footer";
require('isomorphic-fetch')


//The post Function
function postData(url='',data= {}){
    return fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
}
//Validation function to make sure that user does not exist
function getUser(url='',data= {}) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
}

// React component
class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.submit= this.submit.bind(this)
    }
    submit(){
        const userName = document.getElementById('userName').value;
        const Email = document.getElementById('Email').value;
        const pass1 = document.getElementById('pass1').value;
        const pass2 = document.getElementById('pass2').value;
        // Email pattern googled how to verify a email
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

        //Error handling
        if (userName === ''){
            alert("Enter valid username")
        }
        else if(Email === ''){
            alert("Enter valid email")
        }
        else if(pass1 === ''){
            alert("Enter valid Password")
        }
        else if(pass2 === ''){
            alert("Enter valid Password")
        }
        else if(pass1 !== pass2){
            alert("Enter valid Password")
        }
        else{
            if(Email.match(pattern)){
                //Test if user does not already exist
                getUser('/get-user',{'UserName':userName})
                    .then(function (res){
                        if(res.UserDoesNotExist===true){
                            // This is where the post to express will happen will happen
                            postData('/add-user',{
                                'UserName':userName,
                                'Password':pass1,
                                'Email':Email
                            })
                                .then(data =>console.log(JSON.stringify(data)))
                                .catch(err =>console.log(err))
                            window.location.href='/login'
                        }
                        else {
                            alert("User already exists")
                        }
                    })
            }
            else{
                alert('Enter valid email')
            }
        }

    }
    render(){
        return(
            <div className='signup'>
                <img alt='GoG logo' src={logo}/>
                <h2>Sign up</h2>
                <input id='userName' placeholder='Username' defaultValue=''/><br/>
                <input id='Email' placeholder='E-mail' defaultValue='' /><br/>
                <input id='pass1' placeholder='Password' type='Password' defaultValue='' /><br/>
                <input id='pass2' placeholder='Password' type='Password' defaultValue='' /><br/>
                <button onClick={this.submit}>Submit</button>
                <div className='myFooter'><MyFooter/></div>
            </div>
        )
    }
}


export default Signup
