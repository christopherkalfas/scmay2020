import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
    render(){
        return(
            <div className="nag-container">
                [Nav Bar goes here]
                <Link to="/">Home</Link>
                <Link to="/groups">Groups</Link>
            </div>
        )
    }
}

export default Nav