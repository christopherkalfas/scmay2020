import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GroupList extends Component {
    state = {
        groups: []
    }

    componentDidMount(){
        fetch("/api/v1/groups")
        .then( groups => groups.json())
        .then( groups => {
                console.log(groups)
                this.setState({
                    groups: groups
                })
            })
    }

    renderGroups =() => {
        return this.state.groups.map(group => {
            return (
                <div key={group.id}>
                [group names]
                    {group.name}
                </div>
            )
        })
    }

    render(){
        return(
            <div className="group-list">
                All Groups
                {this.renderGroups()}
                <Link to="/groups/new">Add new Group</Link>
            </div>
        )
    }
}

export default GroupList