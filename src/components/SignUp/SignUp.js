import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './SignUp-styles.css';

class SignUp extends Component {

    constructor(props) {
        super(props)
        //binding
        this.handleSignup = this.handleSignup.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)

    }

    handleSignup(e){
        e.preventDefault()
        const user = this.props.username
        const pass = this.props.password
        if(user !== "" && pass !== ""){
            if (!!localStorage.getItem(user)){
                alert("User already exists")
            }else{
                localStorage.setItem( this.props.username, this.props.password)
                alert("Register done")
            }
                
        }else{
            alert("All fields required")
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
                        <h1 className= "signUpTitle">Register</h1> 
                    </Col>
                </Row>

                <Row >
                    <Col></Col>
                    <Col xs={6}>
                        <Form className="inputSignup">
                            <Form.Group controlId="formBasicUserName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={this.handleChangeUsername}  placeholder="Enter user" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleChangePassword}  type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Button onClick={this.handleSignup} size="lg" variant="primary" type="submit" className="signupButton">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default SignUp