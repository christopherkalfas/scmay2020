import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class GroupList extends Component {
    state = {
        groups: []
    }

    componentDidMount(){
       axios.get('/api/v1/groups')
        .then(resp => {
            this.setState({groups: resp.data})
        })
        .catch(data => {
            debugger
        })
    }

    



    render(){
        const groups = this.state.groups.map((group,index)=> {
            return (<li key={index}>{group.name}</li>)
        })
        return(
            <div className="group-list">
                All Groups
                {groups}

            </div>
        )
    }
}

export default GroupList