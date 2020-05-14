import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import GroupShow from "./GroupShow"

const GroupContainer = (group) =>{
    <Router>
        <div>
        <ul>
            <li>
                <Link to ={`/groups/${group.id}`}>
                    {group.name}
                </Link>
            </li>
        </ul>
        <Route path={`/groups/${group.id}`} render={()=><GroupShow/>} />
        </div>
    </Router>
}

export default GroupShow