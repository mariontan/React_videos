import axios from 'axios';

const KEY = 'AIzaSyBbjMu0QToEjqBAC4hhezGH971y7DehX2M';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResults: 5,
		key: KEY
	}
});