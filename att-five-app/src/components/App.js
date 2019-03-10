import React, { Component } from 'react';

class App extends Component {
    state = {
        database: [
            {
                firstName: 'LeBron',
                lastName: 'James',
                fullName: 'LeBron James',
                currentTeamFullName: 'Los Angeles Lakers',
                currentTeamNickname: 'Lakers',
                pointsPerGame: 32.0,
                reboundsPerGame: 11.0,
                assistsPerGame: 12.0,
                stealsPerGame: 2.5,
                blocksPerGame: 2.7
            },
            {
                firstName: 'Stephen',
                lastName: 'Curry',
                fullName: 'Stephen Curry',
                currentTeamFullName: 'Golden State Warriors',
                currentTeamNickname: 'Warriors',
                pointsPerGame: 31.0,
                reboundsPerGame: 4.0,
                assistsPerGame: 14.0,
                stealsPerGame: 3.5,
                blocksPerGame: 0.7
            },
            {
                firstName: 'Kevin',
                lastName: 'Durant',
                fullName: 'Kevin Durant',
                currentTeamFullName: 'Golden State Warriors',
                currentTeamNickname: 'Warriors',
                pointsPerGame: 27.0,
                reboundsPerGame: 13.0,
                assistsPerGame: 8.0,
                stealsPerGame: 2.1,
                blocksPerGame: 2.6
            },
            {
                firstName: 'Anthony',
                lastName: 'Davis',
                fullName: 'Anthony Davis',
                currentTeamFullName: 'New Orleans Pelicans',
                currentTeamNickname: 'Pelicans',
                pointsPerGame: 22.0,
                reboundsPerGame: 19.0,
                assistsPerGame: 7.0,
                stealsPerGame: 0.5,
                blocksPerGame: 4.7
            },
            {
                firstName: 'Joel',
                lastName: 'Embid',
                fullName: 'Joel Embid',
                currentTeamFullName: 'Philadelphia 76ers',
                currentTeamNickname: '76ers',
                pointsPerGame: 24.0,
                reboundsPerGame: 16.0,
                assistsPerGame: 5..6,
                stealsPerGame: 1.8,
                blocksPerGame: 3.8
            },
        ]
    }

    render() {
        return(
            <div className="app">
                This is from my App component
                {
                    console.log(this.state)
                }
            </div>
        )
    }
}

export default App;