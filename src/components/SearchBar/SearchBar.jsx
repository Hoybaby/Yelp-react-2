import React from 'react';
import './SearchBar.css';

// need to create the ways for the search bar to search the api
let sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated':'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    
    // this function is to dynamically create list items needed to display the sort options. Should iterate through the keys and values 
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
        })
    }
}