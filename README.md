# Week 14: Tech Blog

## Description

For our 14th week in our coding bootcamp, we were tasked with

## Installation 
 
Application is already deployed to Heroku [here](https://murmuring-mesa-66230.herokuapp.com/).

## Usage

- While some features of the app can be accessed without logging it (such as viewing singular posts and their comments) if the user wants to contribute, they will need an account.

- If you have previously used the app, log in with your credentials.

![login](./project/images/login.PNG)

- If this is your first time using the app, then you can register a new account. Input your desired username, contact email, and password.

- Your password will be encrypted using bcrypt and stored in the database.

- We adhere to a strict *no junk mail policy*, so no confirmation email will be sent to the submitted email address. (Mostly because no confirmation or recovery functions have been implemented yet but that's for another assignment)

![register](./project/images/register.PNG)

- Once you have either logged in or registered, the Log In option has been replaced with Log Out. 

![logged in dashboard](./project/images/logged-in-dashboard.PNG)

- You will now be able to make posts and leave comments. To start writing, click the New Post button.

![new post](./project/images/new-post.PNG)

- Once you have finished, hit Submit. Your new post will be created and you will be redirected to your User Dashboard.

![home after post](./project/images/home-after-post.PNG)

- When viewing a single post, you will be able to leave comments on another user's submissions.

![new comment](./project/images/new-comment.PNG)

- All of a post's comments will appear in the comment section.

![view comment](./project/images/view-comment.PNG)

- If at any point you'd like to edit a submission you've made, navigate to the desired post via the User Dashboard. If a post belongs to you, there will be some editorial options above the post.

- When chosing to edit a post, test entry fields will appear populated with the post's content. Now you are able to edit the post.

![edit buttons](./project/images/edit-buttons.PNG)

![editing post](./project/images/editing-post.PNG)

- When done, hit submit and the page will reload and the post will be updated.

![edited post](./project/images/edited-post.PNG)

- If you'd like to delete a post outright, click on the Delete button.

![delete button](./project/images/delete-button.PNG)

- You will be prompted to confirm this action. Upon confirmation, you will be sent back to the User Dashboard and the post will be removed.

![delete prompt](./project/images/delete-prompt.PNG)

## License

Standard MIT License
App deployed using [Heroku](https://www.heroku.com)
