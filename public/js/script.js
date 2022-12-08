// Handler for all button prompts and post requests, should just need to
// add functions to buttons, nothing else.

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

// const logout = () => {
//     console.log('log out attempted');
// }

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
  