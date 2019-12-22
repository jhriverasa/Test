import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './SignIn-styles.css';

class SignIn extends Component {
    constructor(props) {
        super(props)
        //binding
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)


    }

    handleLogin(e){
        e.preventDefault()
        
        //validate credentials
        const reg = localStorage.getItem(this.props.username)
        if(!!reg && reg === this.props.password){
            alert("Logged in as: "+ this.props.username)
            this.props.onLogin(true)
        }else{
            alert("Invalid credentials! ")
            this.props.onLogin(false)
        }
            
    }

    handleChangePassword(e){
        this.props.onChangePassword(e.target.value)
    }
    handleChangeUsername(e){
        this.props.onChangeUsername(e.target.value)
    }
    
    componentDidMount(){
        //clear values in state
        this.props.onChangeUsername("")
        this.props.onChangePassword("")
    }

    render() {
        return (
            <Container>
                <Row> 
                    <Col> 
                        {this.props.isUserLoggedIn ?  <h1 className= "signInTitle">Already logged in!</h1> : <h1 className= "signInTitle">Log In</h1> }
                    </Col>
                </Row>

                <Row >
                    <Col></Col>
                    <Col xs={6}>
                       {this.props.isUserLoggedIn ? null :  <Form className="inputLogin">
                            <Form.Group controlId="formBasicUserName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={this.handleChangeUsername}   placeholder="Enter user" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleChangePassword}  type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button onClick={this.handleLogin} size="lg" variant="primary" type="submit" className="loginButton">
                                Login
                            </Button>
                        </Form>
                        }
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default SignIn