document.querySelector('form').addEventListener('submit', e => {
    //prevents default backend server submission attempt
    e.preventDefault();
    //select input element, log value
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    document.querySelector('#link-input').value = encrypted;
})