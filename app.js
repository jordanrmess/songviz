const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));



async function fetchData() {

	const baseUrl = 'http://dataservice.accuweather.com/locations/v1/topcities/50'

	const queryParameters = {
		apikey: '6VH2JATPnnkmPu4oYQEkUcgDUdpWRG3S',
		language: 'en-us',
	};

	var jsonResponse = {}


	const queryString = new URLSearchParams(queryParameters).toString();
	const apiUrl = `${baseUrl}?${queryString}`
	var result
	try {

		const response = await fetch(apiUrl)
			.then(response => response.json())
			.then(data => {
				return data
			})
			.catch(error => {
				// Handle any errors that occurred during the API call
				console.log(error);
			})

		
		result=response

	} catch (error) {
		// Handle any errors that occurred during the API call
		console.log(error);
	}

	return result

}

let cities = fetchData()
cities.then(function(a) {
	console.log(a)
})


