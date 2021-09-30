import React from 'react'

const Dashboard = ({match}) => {
    return (
        <div>
            <center>
                <h4>Displaying Dashboard profile name: {match.params.name}</h4>
            </center>
        </div>
    )
}

export default Dashboard
