import React from 'react';
import { Container, Label, Item, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import GetData from '../scripts/GetData';

export default function Token() {
	const tokenData = GetData("tokens");
	const projectData = GetData("projects");

	let foundRecord = {
		fields: {
			Name: "Loading...",
			Logo: [""]
		}

	};

	const findRecord = (arr, givenId) => {
		arr.map((record) => {
			if(record.id == givenId) {
				foundRecord = record;
				return record;
			}; 
		})
	};

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

	const tokenBlock = () => (
		<Item.Group divided>
			{tokenData.map(record => (
				<Item>
				{findRecord(projectData, record.fields.Name)}
					<Item.Image size='tiny' src={foundRecord.fields.Logo[0].url} />
					<Item.Content>
						<Item.Header>
							{foundRecord.fields.Name}
						</Item.Header>
						<Item.Meta>
							{record.fields.Ticker}
						</Item.Meta>
						<Item.Description>
							<a href={record.fields.CoinGecko}>CoinGecko</a>
							<br />
							<a href={record.fields.CoinMarketCap}>CoinMarketCap</a>
						</Item.Description>
						<Item.Extra>
							Launch Type
						</Item.Extra>
					</Item.Content>
				</Item>
			))}	
		</Item.Group>
	)

	return (
		<>
			{(tokenData.length > 0 && tokenBlock()) || loaderBlock()}
		</>

		)

}