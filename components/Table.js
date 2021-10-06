import React, { useState } from 'react';
import Record from './Record';
import RecordList from './RecordList'
import Token from './Token';
import Nft from './Nft';
import { Pagination, Label } from 'semantic-ui-react';
import Link from '../routes';
import 'semantic-ui-css/semantic.css';
import { useRouter } from 'next/router';
import styles from '../style/Table.module.css';



export default function Table(props) {
	const [ activePage, setActivePage ] = useState(props.pageNum);

	const router = useRouter();

	const tags = [
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

	let keyNum = 0;

	const handleClick = (e, page) => {
		e.preventDefault();
		setActivePage(page);
		router.push(`projects/${page}`);
	};

	if (props.page == "projects") {
		return (
			<>
				<div style={{"backgroundColor": "#4CEAC8", "textAlign": "center"}}>
					{tags.map(tag => (
						<Label key={keyNum += 1} id={styles.label}>{tag}</Label>
					))}
				</div>
				<RecordList class="record" page={activePage} />

				<Pagination id={styles.paginate} 	
					totalPages={5}
					activePage={activePage} 
					onPageChange={(e, i) => handleClick(e, i.activePage)}
				/>

			</>
		);

	} else if (props.page == "tokens") {
		return (
			<Token />

			)
			

	}	else if (props.page == "nfts") {
		return (
			<Nft />
			)
	}

	

};


