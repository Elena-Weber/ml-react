import React from 'react';

const Author = (props) => {
    console.log(props.quotes)
    return (
        <div className="tag">
            <h2 className="filterCategories">Choose the genius to see their quotes:</h2>
            {/* <button
                type="button"
                value="albert-einstein"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Albert Einstein
            </button>
            <button
                type="button"
                value="henry-ford"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Henry Ford
            </button>
            <button
                type="button"
                value="confucius"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Confucius
            </button>
            <button
                type="button"
                value="leonardo-da-vinci"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Leonardo da Vinci
            </button>
            <button
                type="button"
                value="buddha"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>Buddha
            </button> */}
            {/* <button
                type="button"
                value="all"
                name="filter"
                onClick={(e) => props.updateFilter(e.target.value)}>All
            </button> */}
        </div>
    )
}

export default Author;