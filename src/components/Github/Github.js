import React, { Component } from 'react'
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import GitHubLogin from 'react-github-login';
import Repository from './Repository'
import './Github-styles.css';

const CLIENT_ID = [YOUR_CLIENT_ID]
const CLIENT_SECRET = [YOUR_CLIENT_SECRET]

class Github extends Component {
    constructor(props) {
        super(props)
        this.handleLogOut = this.handleLogOut.bind(this)
        this.state = {
            repositories: []
        }
    }

    handleLogOut(){
        this.setState({repositories: []})
    }
    
    render() {
        const onSuccess = (response) => {
           
            const code = response.code
            //console.log(response);

             //request token
            axios({
                method: 'post',
                url: 'https://github.com/login/oauth/access_token',
                params: {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    code: code
                }
            }).then((response) => {
                var raw = response.data
                var start = raw.indexOf("=")
                var end = raw.indexOf("&")
                var token = raw.substring(start+1, end)
                //console.log(raw)
                //console.log(token)

                //Use API with token
                axios({
                    method: 'get',
                    url: 'https://api.github.com/user/repos',
                    params: {
                       visibility: "public"
                    },
                    headers: {'Authorization': 'token ' + token}
                }).then( (response) => {
                    console.log(response.data)
                    this.setState({repositories: response.data})
                }).catch(error => console.log(error))

            }).catch(error => console.log(error))
        
            }

        const onFailure = (response) => {
            console.error(response);
        }
        
        return (
            <div className="container">
                {this.state.repositories.length !== 0 ? <h1 className="repoTitle">Your public repositories:</h1> : null}
                {this.state.repositories.map((repo) => (
                    <Repository key={repo.id}
                        name={repo.name}
                        language={repo.language}
                        url= {repo.html_url}
                        owner={repo.owner.login}
                    />)
                )}

                {this.state.repositories.length === 0 ? 
                <GitHubLogin clientId={CLIENT_ID}
                    redirectUri="http://localhost:3000/github"
                    scope=""
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    buttonText={"Authorize Github"}
                    className="btn btn-dark btn-lg githubButton"
                />
                :
                <Button onClick={this.handleLogOut} size='lg' variant = "dark">Sign out </Button>
                }

            </div>
        )
    }
}

export default Github
