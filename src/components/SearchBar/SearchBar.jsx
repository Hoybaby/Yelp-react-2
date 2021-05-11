import React from 'react';
import './SearchBar.css';


const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        // currently user doesnt know what choice they are selected so this will help it.

        // this.sortByOptions = {
        //     'Best Match': 'best_match',
        //     'Highest Rated': 'rating',
        //     'Most Reviewed': 'review_count'
        // }



    }

    getSortByClass(sortByOption) {
        if (sortByOption == this.state.sortBy) {
            return 'active'
        } else {
            return ''
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    // this function is to dynamically create list items needed to display the sort options. Should iterate through the keys and values 
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} >{sortByOption}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;