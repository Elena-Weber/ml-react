import React, { Component } from 'react';
import Tag from './Tag.js'
import Quote from './Quote.js'

class QuoteList extends Component {
    constructor() {
        super()
        // setting the state
        this.state = {
            quotes: [],
            filtering: "None",
            isLoaded: false,
            error: null
        }
    }

    // what to do after the component has mounted
    componentDidMount() {
        fetch("https://quotable.io/quotes")
        .then(resp => resp.json())
        .then(data => { //console.log(data.results)
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

    render() {
        const { error, isLoaded } = this.state;
// console.log(this.state)
        if (error) { // what to display in case of error
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) { // what to display while waiting for quotes to load
            return <div><h1>Loading...</h1></div>
        } else { // components to display
            return (
            <>
                <div className="tags">
                    <Tag />
                </div>

                <div className="quotesDiv">
                    <Quote quotes={this.state.quotes}/>
                </div>
            </>
            )
        }
    }
}

export default QuoteList;