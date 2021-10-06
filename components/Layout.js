import React, { createRef } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Header from './Header';
import Table from './Table';
import Footer from './Footer';
import 'semantic-ui-css/semantic.css';



const Layout = (props) => {

	return (
			<Container>

				<Header class="header"/>
				{props.children}
				<Footer />


			</Container>

		);
};

export default Layout;