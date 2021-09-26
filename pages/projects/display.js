import React, { Component, useEffect } from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { Item } from 'semantic-ui-react';
import { Link } from '../../routes';



class DisplayProject extends Component {


	static async getInitialProps(props) {
		const idNum = props.query.id	

		return {
			id: idNum
		}
	}

	render() {
		return (
			<Layout>
				<ProjectCard id={this.props.id} />
			</Layout>
		);

	}

}

export default DisplayProject;