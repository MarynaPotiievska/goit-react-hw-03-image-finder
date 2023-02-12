import axios from 'axios';

export const fetchImages = async (request, page='1') => {
	axios.defaults.baseURL = 'https://pixabay.com/';
	const API_KEY = '27227070-2daccb9679d1d87f210af339a';
	const resp = await axios.get('api/', {params: {
		q: request,
		page,
		key: API_KEY,
		image_type: 'photo',
		orientation: 'horizontal',
		per_page: 12
	}
	});	
	return resp.data
}