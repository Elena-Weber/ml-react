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
                value="love"
                name="filter"
                onClick={(e) => console.log(e.target.value)}>Love
            </button>
            <button
                type="button"
                value="happiness"
                name="filter"
                onClick={(e) => console.log(e.target.value)}>Happiness
            </button>
            <button
                type="button"
                value="science"
                name="filter"
                onClick={(e) => console.log(e.target.value)}>Science
            </button>
            <button
                type="button"
                value="nature"
                name="filter"
                onClick={(e) => console.log(e.target.value)}>Nature
            </button>
        </div>
    )
}

export default Tag;