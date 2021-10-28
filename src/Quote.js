import React from 'react';

const Quote = (quotes) => {
// console.log(quotes.quotes)
    return (
        <div className="quotes">
            { quotes.quotes.map((q, id) => (
                <div className="quote" key={id}>
                <h3 className="quoteContent"> {q.props.quotes.content} </h3>
                    <div className="details">
                        {/* <p><span className="quoteDetails">Source:</span> {q.author} &nbsp; | &nbsp; </p> */}
                        {/* <p><span className="quoteDetails">Tags:</span> {q.tags}</p> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Quote;