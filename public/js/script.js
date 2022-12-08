// Handler for all button prompts and post requests, should just need to
// add functions to buttons, nothing else.

// Logout call
const logout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
};

// Login call
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Incorrect email or password, please try again' );
        }
    }
};
  
// New post call
const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const description = document.querySelector('#new-post-body').value.trim();

    if (title && description) {
        const response = await fetch('/post', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        // console.log(response);

        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

// New comment call
const newComment = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#comment-body').value.trim();

    // Gets the current post's id from the URL
    const currentPostUrlID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    if (body) {
        const response = await fetch(`/post/${currentPostUrlID}`, {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

// Login Form Listener
if (document.querySelector('#login-form')) {
    document
        .querySelector('#login-form')
        .addEventListener('submit', loginFormHandler);
}
  
// Logout button listener
if (document.querySelector('#logout-button')) {
    document
        .querySelector('#logout-button')
        .addEventListener('click', logout);
}

// New post listener
if (document.querySelector('#new-post-form')) {
    document
        .querySelector('#new-post-form')
        .addEventListener('submit', newPost);
}
  
// New comment listener
if (document.querySelector('#comment-form')) {
    document
        .querySelector('#comment-form')
        .addEventListener('submit', newComment);
}