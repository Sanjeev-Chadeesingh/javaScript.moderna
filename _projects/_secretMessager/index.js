document.querySelector('form').addEventListener('submit', e => {
    //prevents browser from attempting to submit form to backend 
    e.preventDefault()
    //storing input from form on console
    const input = document.querySelector('.message-input');
    //encrypting the value from the messageInput form 
    const encrypted = btoa(input.value);
    //passing newly encrypted message 
    document.querySelector('.link-input').value = encrypted;
});