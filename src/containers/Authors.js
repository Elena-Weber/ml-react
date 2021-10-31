import React, { useState, useEffect } from 'react';
// import Author from '../components/Author';
// import Quo from '../components/Quo';

export default function AuthorsList() {
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    async function updateAlbertEinstein() {
        try {
            const response = await fetch("https://quotable.io/quotes?author=albert-einstein") // fetching API
            const { statusCode, statusMessage, ...data } = await response.json()
            console.log(data.results)
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
            setData(data)
            setIsLoaded(true)
        } catch (error) {
            console.error(error)
            setData({ content: "We are sorry. Something went wrong. Please update the page." })
        }
    }

    async function updateHenryFord() {
        try {
            const response = await fetch("https://quotable.io/quotes?author=henry-ford") // fetching API
            const { statusCode, statusMessage, ...data } = await response.json()
            console.log(data.results)
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
            setData(data)
            setIsLoaded(true)
        } catch (error) {
            console.error(error)
            setData({ content: "We are sorry. Something went wrong. Please update the page." })
        }
    }

    async function updateConfucius() {
        try {
            const response = await fetch("https://quotable.io/quotes?author=confucius") // fetching API
            const { statusCode, statusMessage, ...data } = await response.json()
            console.log(data.results)
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
            setData(data)
            setIsLoaded(true)
        } catch (error) {
            console.error(error)
            setData({ content: "We are sorry. Something went wrong. Please update the page." })
        }
    }

    async function updateLeonardodaVinci() {
        try {
            const response = await fetch("https://quotable.io/quotes?author=leonardo-da-vinci") // fetching API
            const { statusCode, statusMessage, ...data } = await response.json()
            console.log(data.results)
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
            setData(data)
            setIsLoaded(true)
        } catch (error) {
            console.error(error)
            setData({ content: "We are sorry. Something went wrong. Please update the page." })
        }
    }

    async function updateBuddha() {
        try {
            const response = await fetch("https://quotable.io/quotes?author=buddha") // fetching API
            const { statusCode, statusMessage, ...data } = await response.json()
            console.log(data.results)
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
            setData(data)
            setIsLoaded(true)
        } catch (error) {
            console.error(error)
            setData({ content: "We are sorry. Something went wrong. Please update the page." })
        }
    }

  // what to do after component mounts
    useEffect(() => {
        updateAlbertEinstein();
    }, [])

    useEffect(() => {
        updateHenryFord();
    }, [])

    useEffect(() => {
        updateConfucius();
    }, [])

    useEffect(() => {
        updateLeonardodaVinci();
    }, [])

    useEffect(() => {
        updateBuddha();
    }, [])

    if (!data) return null // if nothing returns

    return ( // what to display
        <div className="quotes">
            <div>
                <h2 className="filterAuthors">Choose the genius to see their quotes</h2>
            </div>
            {/* <Author quotes={updateAuthor}/>
            <div className="quotesDiv">
                <Quo quotes={data}/>
            </div> */}
            <div>
                <button onClick={updateAlbertEinstein}>Albert Einstein</button>
                <button onClick={updateHenryFord}>Henry Ford</button>
                <button onClick={updateConfucius}>Confucius</button>
                <button onClick={updateLeonardodaVinci}>Leonardo da Vinci</button>
                <button onClick={updateBuddha}>Buddha</button>
            </div>
            { !isLoaded ? (<div><h1>Loading...</h1></div>) : ( // while waiting for a quote to be loaded
            <div>
            { data.results.map((q, id) => (
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
            )}
        </div>
    )
}