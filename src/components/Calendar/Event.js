import React, { Component } from 'react'
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import './Event-styles.css';

export class Event extends Component {

    
    render() {
        return (
           
            <div className="eventContainer">
                <h3>{this.props.summary}</h3>
                <p>Start: {this.props.start} - End: {this.props.end}</p>
                <p>Creator: {this.props.creator}</p>
            </div>
         
        )
    }
}

export default Event
