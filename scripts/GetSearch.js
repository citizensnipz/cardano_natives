
const GetSearch = (data, tag) => {

	
	let results = [];

	let tagData = [];


	//for loop to search the tag array of each record
	function hasTag(tags, searchedTag) {
		for (let i = 0; i < tags.length; i++ ) {
			if (tags[i].toLowerCase() == searchedTag.toLowerCase()) {
				return true
				break
			}
		};

	}

	//when a tag is given, searches each record to see if the tag is included
	if (tag) {
		data.forEach(record => {
			if(hasTag(record.fields.Tags, tag)) {
				results.push({
					title: record.fields.Name,
					id: record.id
				})
			}
		})
	//if a tag is not given, it returns the data as normal
	} else {
		data.forEach(record => {

			results.push({
				title: record.fields.Name,
				id: record.id,
				tags: record.fields.Tags
			} )
		});
	}

	console.log(results);
	return (
		results
		)
}

export default GetSearch;