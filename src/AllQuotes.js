import React, { Component } from 'react'
import quotesData from './quotes.json'
import './App.css'


var quotesList = quotesData.quotes;

class Quotes extends Component {
    render() {
        return (
            <ul>
                {
                    quotesList.map((s) => {
                        return (
                            <div>
                                <div>
                                    <div> {s.quotes} </div>
                                </div>
                            </div>
                        );
                    })

                }

            </ul>
        )
    }

}

export default Quotes