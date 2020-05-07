import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TrackerList extends Component {
    state= {
        trackers: []
    }

    componentDidMount(){
        fetch("/api/v1/trackers")
            .then( trackers => trackers.json())
            .then(trackers => {
                this.setState({
                    trackers: trackers
                })
            })
    }

    renderTrackers =() => {
        return this.state.trackers.map(tracker => {
            return (
                <div key={tracker.id}> 
                    {tracker.sunday_reps} - {tracker.monday_reps} - {tracker.tuesday_reps} - {tracker.wednesday_reps}- 
                    {tracker.thursday_reps} - {tracker.friday_reps} - {tracker.saturday_reps}
                </div>
            )
        })
    }

    render(){
        return (
            <div>
                Trackers Component 
                {this.renderTrackers()}
                <Link to="/trackers/new">Add new Tracker</Link>
            </div>
        )
    }

}


export default TrackerList