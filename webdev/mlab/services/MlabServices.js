const API_KEY = 'q-oUpMR84FpC3maXQ79QtIB95hRrJv78'
const FIND_ALL_DATABASES = `https://api.mlab.com/api/1/databases?apiKey=${API_KEY}`
findAllDatabases = () => 
	fetch(FIND_ALL_DATABASES)
		.then(response => response.json())