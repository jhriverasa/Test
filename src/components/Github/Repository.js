import React, { Component } from 'react'
import './Repository-styles.css'

export class Repository extends Component {
    render() {
        return (
           
            <div className="repoContainer">
                <h3>{this.props.name}</h3>
                <p>Language: {this.props.language}</p>
                <p>URL: {this.props.url}</p>
                <p>Owner:{this.props.owner}</p>
            </div>
         
        )
    }
}

export default Repository
