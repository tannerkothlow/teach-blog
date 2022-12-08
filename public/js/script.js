// Handler for all button prompts and post requests, should just need to
// add functions to buttons, nothing else.



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

// Register new user call
const newUser = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Oops! Something went wrong.')
        }
    }
};

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

// Manipulate web page to edit post.
const editPost = () => {
    console.log('Edit attempt');
    // Spawns a text entry field already filled with the user's post.
    // Spawns a submit button that makes the PUT request
};

const deletePost = async (event) => {
    event.preventDefault();

    if (confirm('Are you sure you want to delete this post? This cannot be undone!')) {
        const currentPostUrlID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        const response = await fetch(`/post/${currentPostUrlID}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Oops! Something went wrong.');
        }
    };
};

// Login Form Listener
if (document.querySelector('#login-form')) {
    document
        .querySelector('#login-form')
        .addEventListener('submit', loginFormHandler);
}

// Register form listener
if (document.querySelector('#register-form')) {
    document
        .querySelector('#register-form')
        .addEventListener('submit', newUser);
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

// Post edit listener
if (document.querySelector('#user-edit-button')) {
    document
        .querySelector('#user-edit-button')
        .addEventListener('click', editPost);
}

// Post edit submit listener
// if (document...)

// Delete button listener
if (document.querySelector('#user-delete-button')) {
    document
        .querySelector('#user-delete-button')
        .addEventListener('click', deletePost);
}
