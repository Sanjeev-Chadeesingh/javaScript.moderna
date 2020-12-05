//Making a configuration object, that will hold all necessary functions and work with most all response.data
    //app specific info is within 'root'
const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
    root.innerHTML = `
        <label><b>Search</b></label>
        <input class="input">
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `;
    //these changed to root from document, more specific for reuse!
    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const resultsWrapper = root.querySelector('.results');
    
    const onInput = async (e) => {
        const items = await fetchData(e.target.value);
    
        //this is here to remove the empty dropdown menu, set to check if no movies
        if(!items.length) {
            dropdown.classList.remove('is-active');
            return;
        }
    
        //here is to clear results
        resultsWrapper.innerHTML = '';
    
        //this opens up the menu, right after we successfully fetch all data
        dropdown.classList.add('is-active');
        for(let item of items) {
            const option = document.createElement('a');
    
            //class needed to create complete dropdown item (as per Bulma specs)
            option.classList.add('dropdown-item');

            //now rendering via autoComplete function's method renderOption
            option.innerHTML = renderOption(item);
            
            //adding click event to the option list, so can go further into detailed info
            option.addEventListener('click', () => {
                
                //removed dropdown and focuses in on clicked movie
                dropdown.classList.remove('is-active');
                
                //updating text input
                    //changed from input.value = movie.Title to inputValue(movie), for more reusability 
                input.value = inputValue(item);
                //movie selector function -no not anymore!
                    //this now is changed to onOptionSelect (from onMovieSelect), for reusability
                onOptionSelect(item);
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
};