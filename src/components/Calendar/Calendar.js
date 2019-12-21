import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.handleClickCalendar = this.handleClickCalendar.bind(this)
    
        this.state = {
             
        }
    }

    render() {
       
        
        return (
            <div>
                <Button onClick={this.handleClickCalendar} size="lg" variant="primary" className="calendarButton">Google Calendar</Button>
            </div>
        )
    }
}

export default Calendar
