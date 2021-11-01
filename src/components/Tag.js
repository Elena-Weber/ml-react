import React from 'react';

const Tag = (props) => {

    return (
        <div className="tag">
            <h2 className="filterCategories">Choose the category of quotes:</h2>
            <button
                type="button"
                value="famous"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Famous
            </button>
            <button
                type="button"
                value="wisdom"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Wisdom
            </button>
            <button
                type="button"
                value="happiness"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Happiness
            </button>
            <button
                type="button"
                value="friendship"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Friendship
            </button>
            <button
                type="button"
                value="inspirational"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Inspirational
            </button>
            <button
                type="button"
                value="all"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>All
            </button>
        </div>
    )
}

export default Tag;