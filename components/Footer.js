import React, { Component } from 'react';
import { Divider, Grid, Image, Segment, Icon } from 'semantic-ui-react'
import styles from '../style/Footer.module.css';


class Footer extends Component {

	


	render() {
		return(
			<Segment className={styles.footer}>
				<Grid columns={2} relaxed='very'>
					<Grid.Column className={styles.column}>
						<p>Contact Us:</p>
						<p><a href='josh@cardanonatives.com'>josh@cardanonatives.com</a></p>
						<p><a href='eddie@cardanonatives.com'>eddie@cardanonatives.com</a></p>
					</Grid.Column>
					<Grid.Column className={styles.column}>
						<p></p>
						<p><Icon name="copyright outline" />2021</p>
						
					</Grid.Column>
				</Grid>
				<Divider vertical></Divider>
			</Segment>
		)

	}






}

export default Footer;