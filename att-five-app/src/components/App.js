import React, { Component } from 'react';
import PlayerCard from './playerCard/PlayerCard';
import SortBy from './sortBy/SortBy';
import './app.css';

// function compare(a,b) {
//     if (a.last_nom < b.last_nom)
//       return -1;
//     if (a.last_nom > b.last_nom)
//       return 1;
//     return 0;
//   }
  
//   objs.sort(compare);

const comparePPG = (a, b) => {
    if (a.pointsPerGame > b.pointsPerGame) {
        return -1;
    }
    if (a.pointsPerGame < b.pointsPerGame) {
        return 1;
    }
    return 0;
}

class App extends Component {
    state = {
        database: [
            {
                firstName: 'LeBron',
                lastName: 'James',
                fullName: 'LeBron James',
                primaryPosition: 'SF',
                currentTeamFullName: 'Los Angeles Lakers',
                currentTeamNickname: 'Lakers',
                pointsPerGame: 32.0,
                reboundsPerGame: 11.0,
                assistsPerGame: 12.0,
                stealsPerGame: 2.5,
                blocksPerGame: 2.7,
                currentImage: 'https://placehold.it/1000x1000'
            },
            {
                firstName: 'Stephen',
                lastName: 'Curry',
                fullName: 'Stephen Curry',
                primaryPosition: 'PG',
                currentTeamFullName: 'Golden State Warriors',
                currentTeamNickname: 'Warriors',
                pointsPerGame: 31.0,
                reboundsPerGame: 4.0,
                assistsPerGame: 14.0,
                stealsPerGame: 3.5,
                blocksPerGame: 0.7,
                currentImage: 'https://placehold.it/1000x1000'
            },
            {
                firstName: 'Kevin',
                lastName: 'Durant',
                fullName: 'Kevin Durant',
                primaryPosition: 'PF',
                currentTeamFullName: 'Golden State Warriors',
                currentTeamNickname: 'Warriors',
                pointsPerGame: 27.0,
                reboundsPerGame: 13.0,
                assistsPerGame: 8.0,
                stealsPerGame: 2.1,
                blocksPerGame: 2.6,
                currentImage: 'https://placehold.it/1000x1000'
            },
            {
                firstName: 'Anthony',
                lastName: 'Davis',
                fullName: 'Anthony Davis',
                primaryPosition: 'C',
                currentTeamFullName: 'New Orleans Pelicans',
                currentTeamNickname: 'Pelicans',
                pointsPerGame: 22.0,
                reboundsPerGame: 19.0,
                assistsPerGame: 7.0,
                stealsPerGame: 0.5,
                blocksPerGame: 4.7,
                currentImage: 'https://placehold.it/1000x1000'
            },
            {
                firstName: 'Joel',
                lastName: 'Embid',
                fullName: 'Joel Embid',
                primaryPosition: 'C',
                currentTeamFullName: 'Philadelphia 76ers',
                currentTeamNickname: '76ers',
                pointsPerGame: 24.0,
                reboundsPerGame: 16.0,
                assistsPerGame: 5.6,
                stealsPerGame: 1.8,
                blocksPerGame: 3.8,
                currentImage: 'https://placehold.it/1000x1000'
            },
        ]
    }

    componentDidMount = () => {
        this.setState( prevState => ({
            database: prevState.database.sort(comparePPG)
        }))
    }

    handleChange = () => {

    }

    render() {
        return(
            <div className="app">
                <SortBy />
                <div className="player__list">
                    {
                        this.state.database.map( player => (
                            <PlayerCard
                                currentImage={player.currentImage}
                                fullName={player.fullName}
                                primaryPosition={player.primaryPosition}
                                currentTeamName={player.currentTeamFullName}
                                pointsPerGame={player.pointsPerGame}
                                reboundsPerGame={player.reboundsPerGame}
                                assistsPerGame={player.assistsPerGame}
                                blocksPerGame={player.blocksPerGame}
                                stealsPerGame={player.stealsPerGame}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default App;