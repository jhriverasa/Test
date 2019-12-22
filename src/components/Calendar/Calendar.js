import React, { Component } from 'react'
import { gapi } from 'gapi-script'
import Button from 'react-bootstrap/Button'
import Event from './Event'
import './Calendar-styles.css';

const CLIENT_ID = [YOUR_API_KEY_HERE]
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly"



class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAuthButton: false,
            showSignOutButton: false,
            events: []
        };
        this.initClient = this.initClient.bind(this);
        this.updateSigninStatus = this.updateSigninStatus.bind(this);
    }

    handleAuthClick(){
        gapi.auth2.getAuthInstance().signIn();
    }
    handleSignoutClick(){
        gapi.auth2.getAuthInstance().signOut();
    }
    handleClientLoad() {
        gapi.load('client:auth2', this.initClient);
    }
    initClient() {
        gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT_ID,
            scope: SCOPES
        }).then(() => {
            console.log(window.gapi);
            // Listen for sign-in state changes.
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus)

            // Handle the initial sign-in state.
            this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())

        })
            
    }
    updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
                this.setState({
                    showAuthButton: false,
                    showSignOutButton: true
            })

            //Request for upcoming events
            gapi.client.request({
                'path': `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
                'params': {
                    'timeMin': '2020-01-01T00:00:00.000Z',
                    'timeMax': '2020-01-31T23:59:59.000Z'
                }
            }).then( (response) => {
                let events = response.result.items
                console.log(events)
                this.setState({events: events})
            }, function(reason) {
                //error
                console.log(reason);
            });

        } else {
            this.setState({
                showAuthButton: true,
                showSignOutButton: false,
                events: []
            })
        }
    }

    componentDidMount(){
        this.handleClientLoad()
    }

    render(){
        const authButton = <Button size='lg' id="authorize-button" onClick={this.handleAuthClick.bind(this)}>Authorize Google</Button>
        const signOutButton = <Button size='lg' id="signout-button" onClick={this.handleSignoutClick.bind(this)}>Sign Out</Button>
        return(
            <div className="container">
                {this.state.showSignOutButton ? <h1 className="calendarTitle">Your events next Month:</h1>:null}
                {this.state.events.map((event) => (
                    <Event key={event.id}
                        summary={event.summary}
                        start={event.start.date}
                        end= {event.end.date}
                        creator={event.creator.email}
                    />)
                )}

                {this.state.showAuthButton ? authButton : null}
                {this.state.showSignOutButton ? signOutButton : null}
            </div>
        )
    }
}

export default Calendar
