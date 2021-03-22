// This is the edit event component
import React from "react";
import './css/editEvent.css'
import Footer from "./Footer";

function postData(url='',data= {}){
    const token = localStorage.getItem('token')
    return fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
}

class EditEvent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={Events:[]}
        this.createEvent=this.createEvent.bind(this)
        this.deleteEvent=this.deleteEvent.bind(this)
    }
    componentDidMount() {
        postData('/get-events',{})
            .then((result)=>{
                this.setState({
                    Events:result
                })

            })
    }

    deleteEvent(e){
        postData('/delete-event',{id:e.target.id})
            .then(alert('Event delete'))
        window.location.href='/home/admin/Events'

    }


    createEvent(){
        const eventName = document.getElementById('EventName').value
        const eventDiscription = document.getElementById('Description').value
        postData('/add-event',{EventName:eventName,EventDescription:eventDiscription})
            .then((res)=>console.log(res))
        window.location.href='/home/admin/Events'

    }


    render() {
        const events = this.state.Events
        const Events = events.map((event) =>(
           <div>
               <h3>{event.EventName}</h3>
               <p>{event.EventDescription}</p>
               <button  id={event._id} onClick={this.deleteEvent}>Delete</button>
           </div>
        ))
        if(this.props.admin===true){

            return(
                <div>
                    <h1>Edit Events</h1>
                    <h2>Create new event</h2>
                    <input defaultValue='' className='eventName' id='EventName'/>
                    <h3>Description</h3>
                    <textarea defaultValue='' className='InputDescription' id='Description' name="paragraph_text" /><br/>
                    <button onClick={this.createEvent} >Create new event</button>
                    <div>
                        <h2>Open events</h2>
                        <div>{Events}</div>
                    </div>
                    <Footer/>
                </div>
            )
        }
        else {
            return (
                <h1>You are not admin</h1>
            )
        }


    }

}
export default EditEvent
