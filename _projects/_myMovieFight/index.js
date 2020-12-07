const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '54cdae99',
            s: 'avengers'
        }
    })
    console.log(response);
    console.log(response.data);
};

fetchData();