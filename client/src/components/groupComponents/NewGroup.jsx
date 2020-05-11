import React, { Component } from 'react'
import axios from 'axios'

class NewGroup extends Component {
    state = {
        name: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const group = {
            name: this.state.name
        }

        axios
            .post("api/v1/groups", group)
            .then(resp => {
                
                console.log(resp.data)
            })
            .then(group => {
                this.props.history.push("/groups")
            })
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit.bind(this)}>
                <p>
                    <label htmlFor="new-group-form-name">Group name:</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Cool Group Name"
                        onChange={this.handleChange}
                    />
                </p>

                <input type="submit" value="Create New Group"/>
            </form>
        )
    }
}

export default NewGroup