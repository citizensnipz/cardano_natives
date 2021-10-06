import React, { Component } from 'react';
import { Container, Label, Item, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import { Link, Router } from '../routes';



class RecordList extends Component {

	state = {
		page: this.props.page,
		data: [],
		loading: true

	}

	goGetData = async (page) => {
		const Airtable = require('airtable');

		const myArr = [];

		Airtable.configure({
		    endpointUrl: 'https://api.airtable.com',
		    apiKey: 'keyAfBPXLYlSGkEpJ'
		});

		const base = new Airtable({apiKey: 'keyAfBPXLYlSGkEpJ'}).base('appPvPRetgqOnD37R');
		

		let j = (this.state.page - 1) * 10;
		let i = (this.state.page - 1) * 10 + 9;

		const records = await base('Projects')
			.select()
			.firstPage();

		this.setState({ data: records });

		
	}


	render() {
		this.goGetData();
		
		let pageArr = [];

		pageArr = this.state.data.slice(
	        (this.state.page - 1) * 10,
	        (this.state.page - 1) * 10 + 10
	    );


		let keyNum = 0;
		return (
			<Item.Group divided >
		    	{pageArr.map(record => (
		    	<Link route={`/projects/show/${record.id}`} key={keyNum += 1} >
			        <Item as='a'>
			            <Item.Image size='tiny' src={record.fields.Logo[0].url} />
			            <Item.Content>
			                <Item.Header>{record.fields.Name}</Item.Header>
			                <Item.Meta>
			                    
			                </Item.Meta>
			                <Item.Description>{record.fields.Description}</Item.Description>
			                <Item.Extra>
			                    {record.fields.Tags.map(tag => (
			                        <Label key={keyNum += 1}>{tag}</Label>
			                        ))}
			                </Item.Extra>
			            </Item.Content>

			        </Item>
		        </Link>
		        ))}
		        
		    </Item.Group>

			)
	}
}

export default RecordList;