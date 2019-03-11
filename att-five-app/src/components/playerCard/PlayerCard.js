import React from 'react';
import './player-card.css';

const PlayerCard = props => (
    <div className="player__card">
        <div className="player__img">
            <img
                className="img-responsive"
                src={props.currentImage}
                alt={'img of ' + props.currentImage}
            />
        </div>
        <h3 className="player__card__name">{props.fullName}</h3>
        <div className="player__card__info">
            <p className="player__card__info--position">{props.primaryPosition}</p>
            <p className="player__card__info--team">{props.currentTeamName}</p>
        </div>
        <div className="player__card__stats">
            <div className="player__card__stats__category player__card__stats__points">
                <p>Points:</p>
                <p>{props.pointsPerGame}</p>
            </div>
            <div className="player__card__stats__category player__card__stats__rebounds">
                <p>Rebounds:</p>
                <p>{props.reboundsPerGame}</p>
            </div>
            <div className="player__card__stats__category player__card__stats__assists">
                <p>Assists:</p>
                <p>{props.assistsPerGame}</p>
            </div>
            <div className="player__card__stats__category player__card__stats__blocks">
                <p>Blocks:</p>
                <p>{props.blocksPerGame}</p>
            </div>
            <div className="player__card__stats__category player__card__stats__steals">
                <p>Steals:</p>
                <p>{props.stealsPerGame}</p>
            </div>
        </div>
    </div>
)

export default PlayerCard;