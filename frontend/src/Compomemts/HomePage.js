//This will be the home page of site when you are logged in
import React from "react";
import Verify from "./Verify";
import MainMenu from "./menu";
import { BrowserRouter, Route } from 'react-router-dom'
import Account from "./Account";
import AccountEdit from "./AccountEdit";
import EditEvent from "./editEvent";
import ShowEvents from "./EventsOnHomeScreen";
require('isomorphic-fetch')

function HomeInfo(url ='',data={}){
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


class HomePage extends React.Component{
   constructor(props) {
       super(props);
       this.state ={
           Username:'',
           Admin:false,
           Verified:true,
           Email:'',
           SteamUser:'',
           EpicUser:'',
           UbisoftUser:'',
           OriginUser:'',
           DiscordUser:''

       }
   }
   componentDidMount() {
       const token = localStorage.getItem('token')
       if (token === null) {
           window.location.href = '/login'
       }
       HomeInfo('/home-info',{})
           .then((result)=>{
               this.setState({
                   UserName:result.UserName,
                   Admin:result.Admin,
                   Verified:result.Verified,
                   Email:result.Email,
                   SteamUser:result.SteamUser,
                   EpicUser:result.EpicUser,
                   UbisoftUser:result.UbisoftUser,
                   OriginUser:result.OriginUser,
                   DiscordUser:result.DiscordUser
               })
           })

   }


    render() {
       // This is will verify if user is verified
        const verified = this.state.Verified
        if(verified===false){
            return(<Verify email={this.state.Email} />)
        }
        else {
          return(
              <div>
                  <MainMenu admin={this.state.Admin}/>
                  <Route exact='true' path='/home/account'>
                      <Account user={this.state.UserName}
                               email={this.state.Email}
                               SteamUser={this.state.SteamUser}
                               EpicUser ={this.state.EpicUser}
                               UbisoftUser={this.state.UbisoftUser}
                               OriginUser={this.state.OriginUser}
                               DiscordUser={this.state.DiscordUser}
                      />
                  </Route>
                  <Route exact={true} path='/home/account/edit'>
                      <AccountEdit/>
                  </Route>
                  <Route exact={true} path='/home/admin/events'>
                      <EditEvent admin={this.state.Admin}/>
                  </Route>
                  <Route exact={true} path='/home'>
                      <ShowEvents/>
                  </Route>


              </div>
          )
        }
   }
}
export default HomePage
