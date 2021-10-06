import React, {useState, useEffect } from 'react';
import GetData from '../scripts/GetData';
import { Container, Label, Item, Dimmer, Loader, Image, Icon, Segment } from 'semantic-ui-react';





export default function ProjectCard(props) {

	const [render, setRender] = useState(false);


	const data = GetData("projects");



		

	let displayRecord = {
		fields: {
			Logo: [""],
			Tags: []

		}
	};


	const findRecord = (arr) => {
		arr.map((record) => {
			if(record.id == props.id) {
				displayRecord = record;
				return record;
			}; 
		})
	};

	findRecord(data);
	let keyNum = 0;

	const { 
		Name, 
		Website, 
		Twitter, 
		GitHub, 
		Tickr, 
		LaunchDate, 
		LaunchType, 
		Description, 
		People } = displayRecord.fields;

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

	const projectBlock = () => (
		
		<Item.Group>
			<Item>
				<Item.Image src={displayRecord.fields.Logo[0].url} />
				<Item.Content>
					<h1>{Name}</h1>
					<h4>Ticker Symbol: {Tickr || "N/A"}</h4>
					<Item.Meta>
						<a href={Website}><Icon name="globe" size="big"></Icon></a>
						<a href={Twitter}><Icon name="twitter square" size="big"></Icon></a>
						<a href={GitHub}><Icon name="github square" size="big"></Icon></a>
					</Item.Meta>
					<h5>Launch Date: {LaunchDate || "N/A"} | 
					Launch Type: {LaunchType || "N/A"}</h5>
					<Item.Description>
						{Description}
					</Item.Description>
					<Item.Extra>
						<h5>People: {People || "N/A"}</h5>
						{displayRecord.fields.Tags.map(tag => (
		                        <Label class="label" key={keyNum += 1}>{tag}</Label>
		                        ))}
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>

	)

	return (
		<Container>
			{(displayRecord.fields.Logo[0] && projectBlock()) || loaderBlock() }
		</Container>
	)

}