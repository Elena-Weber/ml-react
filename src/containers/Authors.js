// FUNCTIONAL component with hooks

import React, { useState, useEffect } from 'react';
import Author from '../components/Author';
import Quo from '../components/Quo';

const AuthorsList = () => {
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [quoteAuthor, setAuthor] = useState("henry-ford")

    async function updateAuthor() {
        try {
            const response = await fetch(`https://quotable.io/quotes?author=${quoteAuthor}`) // fetching API
            const { statusCode, statusMessage, ...data } = await response.json()
            console.log(data.results)
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
            setData(data)
            setIsLoaded(true)
        } catch (error) {
            console.error(error)
            setData({ content: "We are sorry. Something went wrong." })
        }
    }

    useEffect(() => {
        setAuthor(quoteAuthor);
    }, [])

    useEffect(() => {
        updateAuthor();
    }, [quoteAuthor])

    if (!data) return null // if no data is present

    return ( // what to display
        <div className="quotes">
            <Author setAuthor={setAuthor}/>
            { !isLoaded ? (<div><h1>Loading...</h1></div>) : ( // while waiting for a quote to be loaded
                <div className="quotesDiv">
                    <Quo quotes={data.results} updateAuthor={updateAuthor}/>
                </div>
            )}
        </div>
    )
}

export default AuthorsList;