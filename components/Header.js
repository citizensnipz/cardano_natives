import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { Link } from '../routes';

const Header = () => {
	return (
			<Menu fluid>
				
				<Link route="/">
					<a className="item">
						<h1>Cardano Natives</h1>
					</a>
				</Link>
				<Menu.Menu position="right">
					<Link route="/projects">
						<a className="item">Projects</a>
					</Link>
					<Link route="/tokens">
						<a className="item">Tokens</a>
					</Link>
					<Link route="/nfts">
						<a className="item">NFTs</a>
					</Link>
				</Menu.Menu>
				<Menu.Menu position="right">
					<Menu.Item>
						<Input icon="search" placeholder="Search..." />
					</Menu.Item>
				</Menu.Menu>
			</Menu>

		);

};

export default Header;