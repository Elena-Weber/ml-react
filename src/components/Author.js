import React from 'react';

const Author = (props) => {
// filtering quotes by author
    return (
        <div className="tag">
            <h2 className="filterAuthors">Choose the genius to see their quotes:</h2>
            <button
                type="button"
                value="henry-ford"
                name="filter"
                onClick={(e) => props.setAuthor(e.target.value)}>Henry Ford
            </button>
            <button
                type="button"
                value="albert-einstein"
                name="filter"
                onClick={(e) => props.setAuthor(e.target.value) }>Albert Einstein
            </button>
            <button
                type="button"
                value="confucius"
                name="filter"
                onClick={(e) => props.setAuthor(e.target.value)}>Confucius
            </button>
            <button
                type="button"
                value="leonardo-da-vinci"
                name="filter"
                onClick={(e) => props.setAuthor(e.target.value)}>Leonardo da Vinci
            </button>
            <button
                type="button"
                value="buddha"
                name="filter"
                onClick={(e) => props.setAuthor(e.target.value)}>Buddha
            </button>
        </div>
    )
}

export default Author;