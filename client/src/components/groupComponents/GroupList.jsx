import React from 'react'
import {  BrowserRouter as Router,
    Switch,
    Link,
    Route } from 'react-router-dom';
import axios from 'axios'
import GroupShow from "./GroupShow"




class GroupList extends React.Component {

    state = {
        groups: []
    }

    componentDidMount(){
 
       axios.get('/api/v1/groups')
        .then(resp => {
            this.setState({groups: resp.data})
            console.log(resp.data)
        })
        .catch(data => {
            debugger
        })
    }

    render(){

    
        const groups = this.state.groups.map((group,index)=> {
            return (
            <li key={index}>
            <GroupShow group={group} key={index}/>
                {/* <Link to={`/groups/${group.id}`}>{group.name}</Link> */}
            </li>)
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







{/* <Link to={`/groups/${group.id}`}>{group.name}</Link> */}