//destructuring the hash object
const { hash } = window.location;
//logging the decoded encrypted string, removing the hash
console.log(atob(hash.replace('#', '')));

document.querySelector('form').addEventListener('submit', e => {
    //prevents default backend server submission attempt
    e.preventDefault();
    //toggling hidden class for pair of forms
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    //select input element, log value
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    //adding the encrypted message to the hash of a stringified window.location
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    //auto selects the link for easier copying
    linkInput.select();
})