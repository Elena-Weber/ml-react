import React from "react"

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
            setData({ content: "Something went wrong" })
        }
    }

  // what to do after component mounts
    React.useEffect(() => {
        updateQuote();
    }, [])

    if (!data) return null // if nothing returns

    return ( // what to display
        <div className="random">
            <div><button onClick={updateQuote}>Generate a random quote</button></div>
            <p className="quoteContent">{data.content}</p>
            <p>Source: {data.author}</p>
        </div>
    )
}