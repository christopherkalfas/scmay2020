import React, { Component } from 'react'

class NewTracker extends Component {

    state = {
        sunday_reps: "",
        monday_reps: "",
        tuesday_reps: "",
        wednesday_reps: "",
        thursday_reps: "",
        friday_reps:"", 
        saturday_reps:"",
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
        let data = {tracker: this.state}
        let token = document.querySelector('meta[name="csrf-token"]').content

        fetch('api/v1/trackers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-Token': token
            },
            redirect: "error",
            body: JSON.stringify(this.state)
        })
            .then(resp => {
                resp.json()
            })
            .then(tracker => {
                this.props.history.push("/")
            })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <p>
                    <label htmlFor="sunday_reps">Sunday: </label>
                    <input type="number" name="sunday_reps" onChange={this.handleChange} />
                </p>
                <p>
                    <label htmlFor="monday_reps">Monday: </label>
                    <input type="number" name="monday_reps" onChange={this.handleChange} />
                </p>
                <p>
                    <label htmlFor="tuesday_reps">Tuesday: </label>
                    <input type="number" name="tuesday_reps" onChange={this.handleChange} />
                </p>
                <p>
                    <label htmlFor="wednesday_reps">Wednesday: </label>
                    <input type="number" name="wednesday_reps" onChange={this.handleChange} />
                </p>
                <p>
                    <label htmlFor="thursday_reps">Thursday: </label>
                    <input type="number" name="thursday_reps" onChange={this.handleChange} />
                </p>
                <p>
                    <label htmlFor="friday_reps">Friday: </label>
                    <input type="number" name="friday_reps" onChange={this.handleChange} />
                </p>
                <p>
                    <label htmlFor="saturday_reps">Saturday: </label>
                    <input type="number" name="saturday_reps" onChange={this.handleChange} />
                </p>
                <input type="submit" value="Create/Update Tracker"/>
            </form>
        )
    }
}

export default NewTracker