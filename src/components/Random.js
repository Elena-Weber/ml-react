import React from 'react';

export default function Random() {
    const [data, setData] = React.useState(null);

    async function updateQuote() {
        try {
            const response = await fetch("https://api.quotable.io/random") // fetching API
            const { statusCode, statusMessage, ...data } = await response.json()
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
            setData(data);
        } catch (error) {
            console.error(error);
            setData({ content: "We are sorry. Something went wrong. Please update the page." })
        }
    }

  // what to do after component mounts
    React.useEffect(() => {
        updateQuote();
    }, [])

    if (!data) return null // if nothing returns

    return ( // what to display
        <div className="random">
            <div className="welcome">
                <h2>Welcome to the collection of the best motivational quotes of the world!</h2>
                <h3>Get inspired by William Shakespeare, Leonardo da Vinci, Buddha, Thomas Jefferson, Confucius and many others.</h3>
            </div>
            <div>
                <button onClick={updateQuote}>Generate a random quote</button>
            </div>
            <div className="quote">
                <h3 className="quoteContent">{data.content}</h3>
                <p className="quoteDetails">Author: {data.author}</p>
            </div>
        </div>
    )
}