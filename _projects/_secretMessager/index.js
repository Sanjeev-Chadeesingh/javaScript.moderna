document.querySelector('form').addEventListener('submit', e => {
    //prevents default backend server submission attempt
    e.preventDefault();
    //select input element, log value
    const input = document.querySelector('input');
    console.log(input.value);
})