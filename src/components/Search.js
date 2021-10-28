import React from 'react';

const Search = (props) => {

    const onChangeHandler = (event) => {
        props.search(event.target.value)
    }

    return (
        <div>
            <input type="text"
                placeholder="Start typing to find a quote"
                onChange={onChangeHandler}
                value={props.searchQuoteProp}
            />
        </div>
    )
}

export default Search;