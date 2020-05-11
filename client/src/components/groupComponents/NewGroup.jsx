import React, { Component } from 'react'

class NewGroup extends Component {
    state = {
        name: ""
    }

    handleChange = e => {
        let newValue = e.target.value 
        let key = e.target.name
        this.setState({
            [key]: newValue
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let data ={group: this.state}
        let token = document.querySelector('meta[name="csrf-token"]').content

        fetch("api/vi/groups",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            redirect: "error",
            body: JSON.stringify(this.state)

        })
            .then(resp => {
                resp.json()
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
                    <input type="text" name="name" onChange={this.handleChange} />
                </p>

                <input type="submit" value="Create New Group"/>
            </form>
        )
    }
}

export default NewGroup