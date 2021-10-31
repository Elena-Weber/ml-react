// CLASS component

import React, { Component } from 'react';
import Tag from '../components/Tag.js';
import Quote from '../components/Quote.js';
import Search from '../components/Search.js';

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
        .then(resp => resp.json()) // transform data from API to json format
        .then(data => { // set state
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

    // setting the searched characters as searched word in state
    searchForQuote = (quo) => {
        this.setState({
            searchedWord: quo
        })
    }

    // displaying quotes including filtering and search
    filterQuotes = () => {
        let searchedWordLowerCase = this.state.searchedWord.toLowerCase() // setting searched word to lower case

        let initialQuotes = this.state.quotes.filter(q => q.content.toLowerCase().includes(searchedWordLowerCase)) // looking for it among quotes

        // filtering into categories
        let allFamous = initialQuotes.filter(q => q.tags.includes("famous-quotes"))
        let allWisdom = initialQuotes.filter(q => q.tags.includes("wisdom"))
        let allHappiness = initialQuotes.filter(q => q.tags.includes("happiness"))
        let allFriendship = initialQuotes.filter(q => q.tags.includes("friendship"))
        let allInspirational = initialQuotes.filter(q => q.tags.includes("inspirational"))

        switch(this.state.filtering) {
            case "famous": // what to display after "famous" button is clicked
                return allFamous.map( (q, id) => { return <Quote quotes={q} key={id} /> })
            case "wisdom": // what to display after "wisdom" button is clicked
                return allWisdom.map( (q, id) => { return <Quote quotes={q} key={id} /> })
            case "happiness": // what to display after "happiness" button is clicked
                return allHappiness.map( (q, id) => { return <Quote quotes={q} key={id} /> })
            case "friendship": // what to display after "friendship" button is clicked
                return allFriendship.map( (q, id) => { return <Quote quotes={q} key={id} /> })
            case "inspirational": // what to display after "inspirational" button is clicked
                return allInspirational.map( (q, id) => { return <Quote quotes={q} key={id} /> })
            case "all": // what to display after "all" button is clicked
                return initialQuotes.map( (q, id) => { return <Quote quotes={q} key={id} /> })
            default: // default display
                return initialQuotes.map( (q, id) => { return <Quote quotes={q} key={id} /> })
        }
    }

// setting category in state to trigger filtering quotes
    updateFilter = (category) => {
        this.setState({
            filtering: category
        })
    }

    render() {
        const { error, isLoaded } = this.state

        if (error) { // what to display in case of error
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) { // what to display while waiting for quotes to load
            return <div><h1>Loading...</h1></div>
        } else { // components to display
            return (
            <>
                <div className="tags">
                    <Tag filtering={this.state.filtering} updateFilter={this.updateFilter}/>
                </div>
                <div className="search">
                    <Search searchQuoteProp={this.state.searchedWord} search={this.searchForQuote} />
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