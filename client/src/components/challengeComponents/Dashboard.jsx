import React, { useState, useEffect } from "react"
import axios from 'axios'

function Dashboard() {
    const [challenges, setChallenges] = useState([])

    useEffect(() => {
        const fetchData = async () =>{

            const result = await axios(
                '/api/v1/challenges',
                )
                setChallenges(result.data)
               
            }
            fetchData()
    }, [])

    return (
        <ul>
            {challenges.map(challenge => (
                <li key={challenge.id}>{challenge.name} </li>
            ))}
        </ul>
    )
}

export default Dashboard