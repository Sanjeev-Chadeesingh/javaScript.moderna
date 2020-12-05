const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        //second added parameter object, turned into string and appended to URL
        params: {
            apikey: '54cdae99',
            s: searchTerm
        }
    });

    if(response.data.Error) {
        return [];
    }
    // console.log(response.data);
        //RETURN the data...so we can use it!!
    return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
    <label><b>Search For A Movie</b></label>
    <input class="input">
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');




const onInput = async (e) => {
    const movies = await fetchData(e.target.value);

    //this is here to remove the empty dropdown menu, set to check if no movies
    if(!movies.length) {
        dropdown.classList.remove('is-active');
        return;
    }

    //here is to clear results
    resultsWrapper.innerHTML = '';

    //this opens up the menu, right after we successfully fetch all data
    dropdown.classList.add('is-active');
    for(let movie of movies) {
        const option = document.createElement('a');

        //this is to handle if there's no movie poster (changed to imgSrc from movie.Poster in option.innerHTML's image source)
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        
        //class needed to create complete dropdown item (as per Bulma specs)
        option.classList.add('dropdown-item');
        option.innerHTML = `
            <img src="${imgSrc}" />
            ${movie.Title}
            <hr>
        `;
        //adding click event to the option list, so can go further into detailed info
        option.addEventListener('click', () => {
            //removed dropdown and focuses in on clicked movie
            dropdown.classList.remove('is-active');
            //updating text input 
            input.value = movie.Title;
            //movie selector function
            onMovieSelect(movie);
        })

        //now appending to the dropdown menu
       resultsWrapper.appendChild(option);
    }
};

input.addEventListener('input', debounce(onInput, 1000));

//this allows us to mouse out of the dropdown
    //we check to see if the root contains the target (target being the dropdown menu)
        //if it doesn't, and someone clicks, it removes the is-active class, thus removing the element from the DOM
document.addEventListener('click', event => {
    if(!root.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }
})

const onMovieSelect = async (movie) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '54cdae99',
            i: movie.imdbID
        }
    });
    //logging the individual movie's data
    // console.log(response.data);

    //this makes the innerHTML what we made in the movieTemplate function, passing in response.data as the movieDetail
    document.querySelector('#summary').innerHTML = movieTemplate(response.data);
};

const movieTemplate = (movieDetail) => {
    return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetail.Poster}" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieDetail.Title}</h1>
                    <h4>${movieDetail.Genre}</h4>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
}