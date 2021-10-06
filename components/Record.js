import React, { Component } from 'react';
import { Container, Label, Item, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import { Link, Router } from '../routes';
import GetData from '../scripts/GetData';


const Record = ({page}) => {

	const data = GetData("projects");
	//pagination
	let pageArr = [];

	pageArr = data.slice(
        (page - 1) * 10,
        (page - 1) * 10 + 10
    );

	const loaderBlock = () => (
		<div>
			<Segment>
		      <Dimmer active inverted>
		        <Loader inverted size="huge">Loading</Loader>
		      </Dimmer>
		      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
		    </Segment>
		</div>
	)

	let keyNum = 0;

	const recordBlock = () => (
	    <Item.Group divided>
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



		return (
			<>
				{(data.length > 0 && recordBlock()) || loaderBlock()}
			</>
		)

	}

	export default Record;
	

//
