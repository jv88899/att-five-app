import React from 'react';
import './sort-by.css';

const SortBy = () => (
    <select
        name="sort"
    >
        <option value="points">Points Per Game</option>
        <option value="rebounds">Rebounds</option>
        <option value="assists">Assists</option>
        <option value="steals">Steals</option>
        <option value="blocks">Blocks</option>
    </select>
)

export default SortBy;