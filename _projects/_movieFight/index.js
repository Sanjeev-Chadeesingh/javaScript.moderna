//this new object will hold all the methods needed to make autocomplete(s), save for the root element, still left in createAutoComplete
const autoCompleteConfig = {
     //app specific logic for rendering individual movies
     renderOption(movie) {
        //this is to handle if there's no movie poster (changed to imgSrc from movie.Poster in option.innerHTML's image source)
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
        <img src="${imgSrc}" />
        ${movie.Title} (${movie.Year})
        <hr>
        `;
   },
   inputValue(movie) {
       return movie.Title;
   },
   //fetch data moved into here for reusability
   async fetchData(searchTerm) {
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
   }

}

//autocomplete, based on markup, working as coded within autocomplete.js
    //now with a new object, autoCompleteConfig, taking all the props from it and then add in new property of root, and take whole object and pass it off to createAutoComplete
createAutoComplete({
    //making a copy of everything from the autoCompleteConfig object, and put in this createAutoComplete object
        //with autoCompleteConfig as own separate object, we can repeat this process multiple times, and create additional autoCompletes with the same config object (autoCompleteConfig) 
    ...autoCompleteConfig,
        //changed from uni-autocomplete to left-side
    root: document.querySelector('#left-autocomplete'),  
    //moved optionSelect from the autoCompleteConfig so can work on either side
    onOptionSelect(movie) {
        //creating ability to remove tutorial when people search for movies
        document.querySelector('.tutorial').classList.add('is-hidden');
        //onMovieSelect is passed in, with an argument for where it goes (left or right summary)
        onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
    } 
});

//here it is in duplicate from above
createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('#right-autocomplete'),
    //moved optionSelect from the autoCompleteConfig so can work on either side
    onOptionSelect(movie) {
        //creating ability to remove tutorial when people search for movies
        document.querySelector('.tutorial').classList.add('is-hidden');
        //onMovieSelect is passed in, with an argument for where it goes (left or right summary)
        onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
    }
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '54cdae99',
            i: movie.imdbID
        }
    });
    //logging the individual movie's data
    // console.log(response.data);

    //this makes the innerHTML what we made in the movieTemplate function, passing in response.data as the movieDetail
    // document.querySelector('#summary').innerHTML = movieTemplate(response.data);

    //new element to append api info to
    summaryElement.innerHTML = movieTemplate(response.data);

    //determining which side is which
    if(side === 'left') {
        leftMovie = response.data;
    } else {
        rightMovie = response.data;
    }
    if(leftMovie && rightMovie) {
        runComparison();
    }
};

const runComparison = () => {
    const leftSideStats = document.querySelectorAll('#left-summary .notification');
    const rightSideStats = document.querySelectorAll('#right-summary .notification');

    leftSideStats.forEach((leftStat, idx) => {
        const rightStat = rightSideStats[idx];
        //dataset prop key for data-value's value
        const leftSideValue = parseInt(leftStat.dataset.value);
        const rightSideValue = parseInt(rightStat.dataset.value);

        if(rightSideValue < leftSideValue) {
            leftStat.classList.remove('is-primary');
            leftStat.classList.add('is-danger');
        } else {
            rightStat.classList.remove('is-primary');
            rightStat.classList.add('is-danger'); 
        }
    })
    
};

const movieTemplate = (movieDetail) => {
        //box office data no longer available, using imdb votes instead
    // const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
    // console.log(dollars);
    const metascore = parseInt(movieDetail.Metascore);
    const imdbRating = parseFloat(movieDetail.imdbRating);
    const votes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));
    
    const awards = movieDetail.Awards.split(' ').reduce((prev, word) => {
        const value = parseInt(word);
        if(isNaN(value)) {
            return prev;
        } else {
            return prev + value;
        }
    }, 0);
    console.log(awards);

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
        <article data-value=${awards} class="notification is-primary">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value=${metascore} class="notification is-primary">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article data-value=${imdbRating} class="notification is-primary">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article data-value=${votes} class="notification is-primary">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
}