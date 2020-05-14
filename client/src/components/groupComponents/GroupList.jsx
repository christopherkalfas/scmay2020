import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
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
        })
        .catch(data => {
            debugger
        })
    }

   render(){
    const groups = this.state.groups.map((group,index)=> {
        return (
            
            <li key={index}>
                <Link to ={`/groups/${group.id}`}>{group.name}</Link>
            </li>


                    
        )
    })
        return(

            <div className="group-list">
                <ul>
                    {groups}
                </ul>
            </div>

        )
    }
    

}

export default GroupList





