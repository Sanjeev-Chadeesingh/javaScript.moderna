document.querySelector('form').addEventListener('submit', e => {
    //prevents browser from attempting to submit form to backend 
    e.preventDefault()
    //storing input from form on console
    const input = document.querySelector('.message-input');
    //encrypting the value from the messageInput form 
    const encrypted = btoa(input.value);
    const linkInput = document.querySelector('.link-input')
    //passing newly encrypted message to a link
    linkInput.value = `${window.location}#${encrypted}`;
    //this lets you select the entire link (maybe add a btn for this)
    linkInput.select();
});