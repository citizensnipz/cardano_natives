import React, { Component } from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import { Item, Label } from 'semantic-ui-react';



class ProjectIndex extends Component {

	state = { 
		tags: [
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
		]
	}
	

	render() {
		let keyNum = 0;
		return (
			<Layout>
				<h1 style={{"textAlign": "center"}}>Welcome to Cardano Natives!</h1>

				<p>
					This is a place to search the latest Cardano projects, tokens and NFT sites.
					Let us know if there's a project missing that you'd like to see!
					Thanks for visiting!
				</p>

				<h3>How to use this site:</h3>

				<p>
					Browse the projects by going to the "Projects" page. Select a project to see more details and links.
					<br />
					If you know the name of a project, you can search for it in the search bar at the top of the page,
					and click the result in the dropdown menu to see more details.
					<br />
					Also, you can try searching for projects by tag. Available tags are listed below.
				</p>
				<div style={{"textAlign": "center"}}>
					{this.state.tags.map(tag => (
						<Label key={keyNum += 1}>{tag}</Label>
					))}
				</div>
				<p style={{"textAlign": "center"}}>

					If you have any feedback or suggestions, please contact us by email or on the subreddit.
					<br />

					<br />
					Thanks for stopping by and we hope you enjoy Cardano Natives.com!
				</p>
				<div style={{"height": "auto"}}></div>
			</Layout>


		);
	}
}

export default ProjectIndex;

	
