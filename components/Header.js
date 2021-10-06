import React from 'react';
import { Menu, Search } from 'semantic-ui-react';
import { Link } from '../routes';
import GetData from '../scripts/GetData';
import GetSearch from '../scripts/GetSearch';
import CustomSearch from './CustomSearch';
import styles from '../style/Header.module.css';

const Header = () => {

	const data = GetData("projects");

	return (
			<Menu fluid borderless inverted id={styles.menu} >
				
				<Link route="/">
					<a className="item" id={styles.subTitle}>
						<h1 className={styles.title}>CARDANO NATIVES</h1>
					</a>
				</Link>
				<Menu.Menu position="right">
					<a className="item" id={styles.subTitle} href="/projects/1">Projects</a>
					<a className="item" id={styles.subTitle} href="/tokens">Tokens</a>
					<a className="item" id={styles.subTitle} href="/nfts">NFTs</a>
				</Menu.Menu>
				<Menu.Menu position="right">
					<Menu.Item>
						<CustomSearch class="search" data={data}/>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);

};

export default Header;