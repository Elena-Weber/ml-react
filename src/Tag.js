import React from 'react';

const Tag = (props) => {
    return (
        <div className="tag">
            <h2 className="filterHeading">Categories of quotes:</h2>
            <button
                type="button"
                value="life"
                name="filter"
                onClick={(e) => console.log(e.target.value)}>Life
            </button>
            <button
                type="button"
                value="all"
                name="filter"
                onClick={(e) => console.log(e.target.value)}>All quotes
            </button>
            <button
                type="button"
                value="happiness"
                name="filter"
                onClick={(e) => console.log(e.target.value)}>Happiness
            </button>
        </div>
    )
}

export default Tag;