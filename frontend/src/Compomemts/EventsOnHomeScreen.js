// This will show your events on your home screen when your lodged in
import React from "react";
import Footer from "./Footer"

function getData(url='',data= {}){
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

class ShowEvents extends React.Component{
    constructor(props) {
        super(props);
        this.state={Events:[]}
    }
    componentDidMount() {
        getData('/get-events',{})
            .then((result)=>{
                this.setState({
                    Events:result
                })

            })
    }
    render() {
        const events = this.state.Events
        const Events = events.map((event) =>(
            <div>
                <h3>{event.EventName}</h3>
                <p>{event.EventDescription}</p>
                <hr/>
            </div>

        ))
        return(
            <div>
                <h1>Upcoming events</h1>
                <div>
                    <h2>Open events</h2>
                    <div>{Events}</div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default ShowEvents
