import React, { useState } from 'react';
import GetData from '../scripts/GetData';
import Record from './Record';
import Token from './Token';
import Nft from './Nft';
import { Pagination } from 'semantic-ui-react';
import Link from '../routes';
import 'semantic-ui-css/semantic.min.css';



export default function Table(props) {
	const [ activePage, setActivePage ] = useState(1);


	if (props.page == "projects") {
		return (
			<>
				<Record page={activePage} />
			
				<Pagination fluid
					
					totalPages={5} 
					onPageChange={(event, data) =>
						{ activePage: setActivePage(data.activePage)}

					}
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


