// This is the menu component
import React from "react";
import './css/menu..css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'


class MainMenu extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.admin ===false){
            return(
                <Container fluid={true}>
                    <Row>
                        <nav className='MyNav'>
                            <Col as={'span'}><a href='/home' className='link' >Home</a></Col>
                            <Col as={'span'}><a  href='/home/account' className='link'>Account</a></Col>
                        </nav>
                    </Row>
                </Container>
            )
        }
        // This is wat admin user will see
        else{
            return(
              <div className='MyNav'>
                  <a href='/home' className='link' >Home</a>
                  <a  href='/home/account' className='link'>Account</a>
                  <a  href='/home/admin/Events' className='link'>Events</a>
              </div>

            )
        }
    }
}

export default MainMenu
