import React from 'react';

const Quo = (quotes) => {
// console.log(quotes.quotes)
    if (quotes.quotes.length === 0) {
        return (
            <h3>Sorry, there is nothing to display.</h3>
        )
    } else {
        return (
            <div className="quotes">
                { quotes.quotes.map((q, id) => (
                    <div className="quote" key={id} >
                        <h3 className="quoteContent"> {q.content} </h3>
                        <div className="details">
                            <p><span className="quoteDetails">Author:</span> {q.author} </p>
                            <div className="quoteTags">
                                {q.tags.map((tag, id) =>
                                    <li key={id}> {tag} </li>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Quo;