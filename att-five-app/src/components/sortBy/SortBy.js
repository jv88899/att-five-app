import React from 'react';
import './sort-by.css';

const SortBy = props => (
    <select
        name="sort"
        onChange={props.handleChange}
    >
        <option value="points">Points Per Game</option>
        <option value="rebounds">Rebounds</option>
        <option value="assists">Assists</option>
        <option value="steals">Steals</option>
        <option value="blocks">Blocks</option>
    </select>
)

export default SortBy;