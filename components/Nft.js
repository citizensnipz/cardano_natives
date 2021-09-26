import React from 'react';
import { Container, Label, Item, Dimmer, Loader, Icon, Image, Segment } from 'semantic-ui-react';
import GetData from '../scripts/GetData';


export default function Nft() {
	const nftData = GetData("nfts");

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

	const nftBlock = () => (
		<Item.Group divided>
			{nftData.map(record => (
				<Item>
					<Item.Content>
						<Item.Header>
							{record.fields.Name}
						</Item.Header>
						<Item.Meta>
							<a href={record.fields.Twitter}><Icon name="twitter square" size="big"></Icon></a>
							<a href={record.fields.Website}><Icon name="globe" size="big"></Icon></a>
							
						</Item.Meta>
						<Item.Description>
							{record.fields.Description}
						</Item.Description>
						<Item.Extra>
							{record.fields.People}
						</Item.Extra>
					</Item.Content>
				</Item>
			))}	
		</Item.Group>


		)
	return (
		<>
			{(nftData.length > 0 && nftBlock()) || loaderBlock()}

		</>
		)

}