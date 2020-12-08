document.querySelector('form').addEventListener('submit', e => {
    //prevents browser from attempting to submit form to backend 
    e.preventDefault()
    //storing input from form on console
    const input = document.querySelector('input');
    console.log(input.value);
});