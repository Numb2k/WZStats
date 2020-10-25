import React from 'react';
import quotesData from './quotes.json';
import './App.css';

const quotesList = quotesData.quotes;

const Quotes = () => (
	<ul>
		{Object.keys(quotesData.quotes).map(key => (
			<li>{`${key}: ${quotesData.quotes[key]}`}</li>
		))}
	</ul>
);

export default Quotes;
