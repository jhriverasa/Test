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

        this.state = {
             username: "",
             password: ""
        }
    }

    handleLogin(e){
        e.preventDefault()
        localStorage.setItem('username', this.state.username)
        localStorage.setItem('password', this.state.password)
        alert("Logged in as: "+ this.state.username)
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }
    handleChangeUsername(e){
        this.setState({username: e.target.value})
    }
    


    render() {
        return (
            <Container>
                <Row> 
                    <Col> 
                        <h1 className= "signInTitle">Log In</h1> 
                    </Col>
                </Row>

                <Row >
                    <Col></Col>
                    <Col xs={6}>
                        <Form className="inputLogin">
                            <Form.Group controlId="formBasicUserName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={this.handleChangeUsername} value={this.state.username} placeholder="Enter user" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleChangePassword} value={this.state.password} type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button onClick={this.handleLogin} size="lg" variant="primary" type="submit" className="loginButton">
                                Login
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default SignIn
