import React, { Component } from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import GetData from '../scripts/GetData';



class Projects extends Component {


	static async getInitialProps(props) {
		const pageNum = props.query.pagenum;

		return {
			page: pageNum,

		}
	}


	render() {
		return (
			<Layout >
				<Table page="projects" pageNum={this.props.page} style={{"backgroundColor": "#4CEAC8"}}/>
			</Layout>
			);


	}


}

export default Projects;