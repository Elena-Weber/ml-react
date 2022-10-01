// FUNCTIONAL component with hooks

import React, { useState, useEffect } from 'react';
import Author from '../components/Author';
import Quo from '../components/Quo';
import { hotjar } from 'react-hotjar';

const AuthorsList = () => {

    hotjar.initialize(3182620, 6);

    if (hotjar.initialized()) {
        hotjar.identify('USER_ID', { userProperty: 'value' });
    }

    // setting the initial state
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [quoteAuthor, setAuthor] = useState("henry-ford")

    // fetching different API endpoints depending on author chosen
    async function updateAuthor() {
        try {
            const response = await fetch(`https://quotable.io/quotes?author=${quoteAuthor}`)
            const { statusCode, statusMessage, ...data } = await response.json()
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
    }, [quoteAuthor])

    // fetching different API endpoint every time author changes
    useEffect(() => {
        updateAuthor()
    }, [quoteAuthor]) // eslint-disable-line react-hooks/exhaustive-deps

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