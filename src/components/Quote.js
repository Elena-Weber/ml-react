import React from 'react';

const Quote = (quotes) => {

    return (
        <div className="quotes">
            { quotes.quotes.map((q, id) => (
                <div className="quote" key={id} >
                    <h3 className="quoteContent"> {q.props.quotes.content} </h3>
                    <div className="details">
                        <p><span className="quoteDetails">Source:</span> {q.props.quotes.author} </p>
                        <div className="quoteTags">
                            {q.props.quotes.tags.map((tag, id) =>
                                <li key={id}> {tag} </li>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Quote;