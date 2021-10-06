import React, { useState, useEffect } from 'react'
import { Search, Grid, Segment, Label } from 'semantic-ui-react'
import GetSearch from '../scripts/GetSearch';
import _ from 'lodash';
import { Link, Router } from '../routes';
import { useRouter } from 'next/router';



const CustomSearch = (props) => {

	const router = useRouter();
	const [results, setResults] = useState([]);
	const [value, setValue] = useState('');

	const data = props.data;

	const tagList = [
	    "DEX",
	    "DeFi",
	    "ORACLE",
	    "CARDANO COLLABORATOR",
	    "DAO",
	    "dApp",
	    "GOVERNANCE",
	    "STAKING",
	    "WALLET",
	    "NFT",
	    "UTILITY",
	    "CAPITAL MARKETS",
	    "STABLE COIN",
	    "PAYMENTS",
	    "GAMES",
	    "TOKEN"
	];

	let formattedTagList = [];

	function searchByTag(term) {
		tagList.forEach(tag => {
			formattedTagList.push({title: tag})
		});
		for (let i = 0; i < tagList.length; i++) {
			if(tagList[i].toLowerCase() == term.toLowerCase()) {
				//console.log("found the tag in the function");
				return true
				break
			}
		}
		/**
		tagList.forEach(tag => {
			if(tag.toLowerCase() == term.toLowerCase()) {
				console.log("found the tag in the function");
				return true
			}
		})
		**/
	}

	const handleChange = e => {
		let value = e.target.value;
		setValue(value);
    	const re = new RegExp(_.escapeRegExp(value), 'i');
    	const isMatch = (result) => re.test(result.title);
    	let searchedData;
    	if (searchByTag(value)) {
    		console.log("found the tag in the handle");
    		searchedData = GetSearch(data, value);
    	} else {
    		searchedData = _.filter(GetSearch(data), isMatch);
    	}
		//console.log(searchedData);
		setResults(searchedData);
	}


	function handleSelect(event, data) {
		router.push(`/projects/show/${data.result.id}`);
	}



	return(
		<Search
			onSearchChange={handleChange}
			results={results}
			value={value}
			onResultSelect={handleSelect}
		/>
		)
}

export default CustomSearch;