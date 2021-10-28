import React, { Component } from 'react';
import Tag from './Tag.js';
import Quote from './Quote.js';
import Search from './Search.js';

class QuoteList extends Component {
    constructor() {
        super()
        // setting the state
        this.state = {
            quotes: [],
            filtering: "None",
            searchedWord: "",
            isLoaded: false,
            error: null
        }
    }

    // what to do after the component has mounted
    componentDidMount() {
        fetch("https://quotable.io/quotes?limit=50")
        .then(resp => resp.json())
        .then(data => { //console.log(data.results[7].tags)
            this.setState({
                quotes: data.results,
                isLoaded: true
            })
        },
            error => { // in case of error
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    searchForQuote = (quo) => {
        this.setState({
            searchedWord: quo
        })
    }

// displaying quotes
filterQuotes = () => {
    let searchedWordLowerCase = this.state.searchedWord.toLowerCase() // setting searched letters to lower case

    let initialQuotes = this.state.quotes.filter(q => q.content.toLowerCase().includes(searchedWordLowerCase)) // looking for them among quotes

    let allFamous = initialQuotes.filter(q => q.tags.includes("famous-quotes"))
    let allWisdom = initialQuotes.filter(q => q.tags.includes("wisdom"))
    let allHappiness = initialQuotes.filter(q => q.tags.includes("happiness"))
    let allFriendship = initialQuotes.filter(q => q.tags.includes("friendship"))
    let allInspirational = initialQuotes.filter(q => q.tags.includes("inspirational"))

    switch(this.state.filtering) {
        case "famous": // what to display after "life" button is clicked
            return allFamous.map( (q, id) => { return <Quote quotes={q} key={id} /> })
        case "wisdom": // what to display after "love" button is clicked
            return allWisdom.map( (q, id) => { return <Quote quotes={q} key={id} /> })
        case "happiness": // what to display after "happiness" button is clicked
            return allHappiness.map( (q, id) => { return <Quote quotes={q} key={id} /> })
        case "friendship": // what to display after "happiness" button is clicked
            return allFriendship.map( (q, id) => { return <Quote quotes={q} key={id} /> })
        case "inspirational": // what to display after "happiness" button is clicked
            return allInspirational.map( (q, id) => { return <Quote quotes={q} key={id} /> })
        case "all": // what to display after "happiness" button is clicked
            return initialQuotes.map( (q, id) => { return <Quote quotes={q} key={id} /> })
        default: // default display
            return initialQuotes.map( (q, id) => { return <Quote quotes={q} key={id} /> })
    }
}

updateFilter = (category) => { // setting state category in state to trigger filtering quotes
    this.setState({
        filtering: category
    })
}

    render() {
        const { error, isLoaded } = this.state;
//console.log(this.state.quotes.length)
        if (error) { // what to display in case of error
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) { // what to display while waiting for quotes to load
            return <div><h1>Loading...</h1></div>
        } else { // components to display
            return (
            <>
                <div className="search">
                    <Search searchQuoteProp={this.state.searchedWord} search={this.searchForQuote} />
                </div>
                <div className="tags">
                    <Tag filtering={this.state.filtering} updateFilter={this.updateFilter}/>
                </div>

                <div className="quotesDiv">
                    <Quote quotes={this.filterQuotes()}/>
                </div>
            </>
            )
        }
    }
}

export default QuoteList;