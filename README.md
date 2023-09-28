# Title Place Holder

{TITLE} is a community for football fans around the world. It allows people from all over to come together and share their experiences with different stadiums across the globe. The page has a social network style, that encourages users to share opinions and interact with others on the platform. It was developed to give the football fan a place to go for opinions on stadiums, atmosphere and to find the best places to go spectate the beautiful game.

This sit was created for Portfolio Project #5 (Advanced Front End) - Diploma in Full Stack Software Development at the [Code Institute](https://www.codeinstitute.net).

#### [View live website here](https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/)

![Site view across devices](/images/pp5-amiresponsive.png)

## Table of Contents

- [Project](<#project>)
  * [Objective](<#objective>)
  * [Site User's Goal](<#site-users-goal>)
  * [Project Management](<#project-management>)

- [User Experience (UX)](<#user-experience-ux>)
    * [Wireframes](<#wireframes>)
    * [Design Choices](<#design-choices>)

- [Database Schema](<#database-schema>)

- [Existing Features](#features)
  - [Frontend](#frontend)
    * [Navigation](#navigation)
    * [Authentication](#authentication)
    * [Homepage](#homepage)
    * [Feed](#feed)
    * [Posts](#posts)
    * [Create a Post](#create-a-post)
    * [Post Detail Page](#Post-detail-page)
    * [Profile Page](#profile-page)
    * [Contact Us](#contact)
    * [Reusable React Components](#reusable-react-components)

- [Technologies Used](<#technologies-used>)
  * [Languages](<#languages>)
  * [Frameworks & Software](<#frameworks--software>)
  * [Libraries](<#libraries>)

- [Testing](<#Testing>)
  * [Code Validation](<#code-validation>)
  * [Manual Testing](<#manual-testing>)
  * [Lighthouse](<#lighthouse>)
  * [Resolved Bugs](<#resolved-bugs>)
  * [Unresolved Bugs](<#unresolved-bugs>)
- [Features Left To Implement](<#features-left-to-implement>)
- [Deployment](#deployment)
- [Credits](#credits)

# **Project**

## Objective

The objective of this project is to allow footballing fans from all walks of life to come together and to be able to share their memories of the sport with others. The website allows users to create, read, update, delete both posts and comments. The posts on the website are in order from newest at the top to oldest at the bottom, with users also able to filter content using the search bar or the feed and liked pages respectively. Users are also able to follow each other and like other users posts.

## Site User's Goal

There are two types of users who would interact with this site. Users who have an interest in posting about football matches and want to share the experience with others. The other users are seeking recommendations for football matches and go to the site to see other users opinions on certain teams, fans, stadiums.

The users who just want to share their experience can do so very easily with the ability to make posts with images and description of the game. The users are able to post the team they watched, the name of the stadium, the country and even tags.

The users seeking recommendations are able to cycle through posts on the site with ease using the search feature. They can also filter the posts using the feed and liked pages which only shows the posts of users you follow and the posts you have liked respectively. These features make it simple for users to find exactly what they are looking for, using the other users opinions to their advantage in order to have the best football experience.

## Project Management

- [User Stories](https://github.com/ScottA27/Portfolio-Project-5/issues)
- [Project Board](https://github.com/users/ScottA27/projects/10)

Throughout my project I have utilised GitHub's issues to make my user stories and projects to make my kanban board. When I was initially creating the project I made all of the user stories to divide my work into smaller tasks. I then made labels for to go onto the user stories: must have, should have and could have. The labels were then given to the user stories the applied to.

All of the user stories were then placed onto my kanban board. The kanban board is broken into three sections: todo, in progress and done. Whenever I started a user story I would go onto the kanban board and move it to in progress, once it was completed I'd move it to done. This gave me a simple way to break down my project workflow and allowed me to focus on one thing at a time.

# **User Experience (UX)**

## Wireframes

I created wireframes for my project using the software [Balsamiq](https://balsamiq.com). The wireframes have all been created as a desktop view as this is primarily made for browser. There is however full responsiveness for smaller screen sizes such as mobile and tablet. The layout of the pages are based on the CI Moments walkthrough as I admire the simplicity of it and how it adapts to smaller screens.

<details><summary><b>Wireframes</b></summary>

#### Home Page
![Home Page](/images/pp5-homepage-wireframe.png)
#### Create Post
![Create Post](/images/pp5-createpost-wireframe.png)
#### Profile Page
![Profile Page](/images/pp5-profilepage-wireframe.png)
#### Contact Us
![Contact Us](/images/pp5-contactus-wireframe.png)
#### Sign Up
![Sign Up](/images/pp5-signup-wireframe.png)
#### Sign In
![Sign In](/images/pp5-signin-wireframe.png)

</details><br/>

## Design Choices

### Colour Scheme 

When I was designing my project I always wanted to keep things simple. I decided that the best way to do this was to have colours based on a football pitch, which is green and white. I thought dark greens throughout the project, implemented in buttons and nav links, where the best way to use the colour. There is also a slight grey background colour on the page. The alerts throughout the website are a lighter shade of green, pairing well with the lighter shades already on the page. The signup and signin pages also have orange implemented as it goes well with the green and white. Overall the colour palette is fairly simple but all the colours go together and very complimentary.

![Colour Palette](/images/Colour-Palette.png)

### Typography

The font I decided to go with is 'PT Sans Narrow' with a backup font of 'sans-serif' should the original not load. This font was picked as it is simple and elegant. It reads really easily but is on the lighter side to pair with the colour palette of the page.

![Font](/images/pp5-font.png)

# **Database Schema**

![Database Schema](/images/pp5-dataschema.png)

From the database schema above I made my models for the backend of the project which are:

* User - created with standard django user model.
* Profile - created when user signs up
* Posts - to share an experience with other users
* Likes - to indicate wether users like a post or not
* Comments - allows users to voice their opinion on a post
* Contact - allows users to contact the site owner

# **Existing Features**

## Frontend

- #### **Home Page**
  - This is the home page, all users logged in or not see this page and get to scroll through posts.

<details>
    <summary>Click to View Home Page</summary>

  ![Home Page](/images/pp5-homepage.png)
</details>

***

- #### **Profile Page**
  - This is the profile page, where users can view a specific users profile with their stats, bio and posts.

<details>
    <summary>Click to View Profile Page</summary>

  ![Profile Page](/images/pp5-profilepage.png)
</details>

***

- #### **Create Post Page**
  - This is the create post page, where logged in users can create their own posts.

<details>
    <summary>Click to View Create Post Page</summary>

  ![Create Post Page](/images/pp5-createpost.png)
</details>

***

- #### **Post Page**
  - This is the post page, where users can view a specific post and the comments underneath it.

<details>
    <summary>Click to View Post Page</summary>

  ![Post Page](/images/pp5-postpage.png)
</details>

***

- #### **Edit Post Page**
  - This is the edit post page, where logged in users can edit their own posts.

<details>
    <summary>Click to View Edit Post Page</summary>

  ![Edit Post Page](/images/pp5-editpost.png)
</details>

***

- #### **Comment Section**
  - This is the comment section, viewed at the bottom of each post page. This allows logged in users to voice their opinion on specific posts.

<details>
    <summary>Click to View Comment Section</summary>

  ![Comment Section](/images/pp5-commentsection.png)
</details>

***

- #### **Edit Profile Page**
  - This is the edit profile page, which allows logged in users to edit their own profile.

<details>
    <summary>Click to View Edit Profile Page</summary>

  ![Edit Profile Page](/images/pp5-editprofile.png)
</details>

***

- #### **Sign Up Page**
  - This is the sign up page, this allows logged out users to create an account to get access to all features of the website.

<details>
    <summary>Click to View Sign Up Page</summary>

  ![Sign Up Page](/images/pp5-signup.png)
</details>

***

- #### **Sign In Page**
  - This is the sign in page, this allows logged out users to sign in if they already have an account.

<details>
    <summary>Click to View Sign In Page</summary>

  ![Sign In Page](/images/pp5-signin.png)
</details>

***

- #### **Change Username Page**
  - This is the change username page, which allows logged in users to change their own username.
<details>
    <summary>Click to View Change Username Page</summary>

  ![Change Username Page](/images/pp5-changeusername.png)
</details>

***

- #### **Change Password Page**
  - This is the change username page, which allows logged in users to change their own password.
<details>
    <summary>Click to View Change Password Page</summary>

  ![Change Password Page](/images/pp5-changepassword.png)
</details>

***

## Components

There are several components created so they could be used throughout the project without repeating code. These are documented below:

* Asset.js - Used to render the loading spinner shown throughout the project when posts and comments are loading.
* Avatar.js - Used to display users avatars. This is used in posts, comments, profiles, popular users. 
* MoreDropdown.js - Used to render a dropdown menu with edit and delete buttons. Also used to render a dropdown menu with the edit profile, change username and change password buttons.
* NavBar.js - Used to render the navbar at the top of every page.
* NotFound.js - Used to render a message to the user that the page they're trying to access doesn't exist.

## Technologies Used

### Languages

* [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) - Provides the content and structure for the website
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides interactive elements of the website
* [React.js](https://en.wikipedia.org/wiki/React_(software)) - Provides the base for the frontend components
* [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) - Provides the functionality for the DRF backend framework

### Frameworks & Software

#### Frontend

* [React Bootstrap](https://react-bootstrap.github.io/) - A CSS framework that helps build responsive sites
* [Balsamiq](https://balsamiq.com/) - Used to create wireframes
* [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories
* [GitPod](https://www.gitpod.io/) - Using GitPod terminal to commit to Git and push to GitHub
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test site performance
* [AmIResponsive](https://ui.dev/amiresponsive) - Used for responsiveness check across devices
* [Favicon](https://favicon.io/) - Used to create the favicon
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness
* [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
* [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
* [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code

#### Backend

* [Django Rest Framework](https://www.django-rest-framework.org/) - A framework for building web API's
* [PEP8 Validation](https://pypi.org/project/pep8/) - pep8 is a tool to check your Python code
* [Heroku](https://en.wikipedia.org/wiki/Heroku) - Used to deploy the live project
* [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project

### Libraries

The libraries used to create this project are documented below:

* [asgiref](https://pypi.org/project/asgiref/) - ASGI is a standard for Python asynchronous web apps and servers to communicate with each other, and positioned as an asynchronous successor to WSGI.
* [cloudinary](https://pypi.org/project/cloudinary/) - The Cloudinary Python SDK allows you to quickly and easily integrate your application with Cloudinary. Effortlessly optimize, transform, upload and manage your cloud's assets.
* [dj-database-url](https://pypi.org/project/dj-database-url/0.5.0/) - This simple Django utility allows you to utilize the 12factor inspired DATABASE_URL environment variable to configure your Django application.
* [dj-rest-auth](https://pypi.org/project/dj-rest-auth/) - Drop-in API endpoints for handling authentication securely in Django Rest Framework. Works especially well with SPAs (e.g., React, Vue, Angular), and Mobile applications.
* [Django](https://pypi.org/project/Django/) - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
* [django-allauth](https://pypi.org/project/django-allauth/) - Integrated set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication.
* [django-cloudinary-storage](https://pypi.org/project/django-cloudinary-storage/) - Django Cloudinary Storage is a Django package that facilitates integration with Cloudinary by implementing Django Storage API.
* [django-cors-headers](https://pypi.org/project/django-cors-headers/) - A Django App that adds Cross-Origin Resource Sharing (CORS) headers to responses. This allows in-browser requests to your Django application from other origins.
* [django-filter](https://pypi.org/project/django-filter/) - Django-filter is a reusable Django application allowing users to declaratively add dynamic QuerySet filtering from URL parameters.
* [django-taggit](https://pypi.org/project/django-taggit/) - django-taggit a simpler approach to tagging with Django.
* [djangorestframework](https://pypi.org/project/djangorestframework/) - Django REST framework is a powerful and flexible toolkit for building Web APIs.
* [djangorestframework-simplejwt](https://pypi.org/project/djangorestframework-simplejwt/) - Simple JWT is a JSON Web Token authentication plugin for the Django REST Framework.
* [gunicorn](https://pypi.org/project/gunicorn/) - Gunicorn ‘Green Unicorn’ is a Python WSGI HTTP Server for UNIX. It’s a pre-fork worker model ported from Ruby’s Unicorn project. The Gunicorn server is broadly compatible with various web frameworks, simply implemented, light on server resource usage, and fairly speedy.
* [oauthlib](https://pypi.org/project/oauthlib/) - OAuthLib is a framework which implements the logic of OAuth1 or OAuth2 without assuming a specific HTTP request object or web framework
* [Pillow](https://pypi.org/project/Pillow/8.2.0/) - The Python Imaging Library adds image processing capabilities to your Python interpreter.
* [psycopg2](https://pypi.org/project/psycopg2/) - Psycopg is the most popular PostgreSQL database adapter for the Python programming language. Its main features are the complete implementation of the Python DB API 2.0 specification and the thread safety (several threads can share the same connection).
* [PyJWT](https://pypi.org/project/PyJWT/) - JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.
* [python3-openid](https://pypi.org/project/python3-openid/) - This is a set of Python packages to support use of the OpenID decentralized identity system.
* [requests-oauthlib](https://pypi.org/project/requests-oauthlib/) - This project provides first-class OAuth library support for Requests.
* [sqlparse](https://pypi.org/project/sqlparse/) - sqlparse is a non-validating SQL parser for Python. It provides support for parsing, splitting and formatting SQL statements.
* [urllib3](https://pypi.org/project/urllib3/) - urllib3 is a powerful, user-friendly HTTP client for Python.
* [whitenoise](https://pypi.org/project/whitenoise/) - With a couple of lines of config WhiteNoise allows your web app to serve its own static files, making it a self-contained unit that can be deployed anywhere without relying on nginx, Amazon S3 or any other external service.

# **Testing**

## Code Validation

### Frontend

The deployed project has been passed through both the [W3C HTML Validator](https://validator.w3.org/) and the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

#### W3C HTML Validator

There were no errors found when the deployed project URL was passed into the validator. There were some different info messages trailing slashes in the head element, I tried to remove them but the same messages continue to come up when passed through the validator.

![W3C HTML Validation](/images/pp5-w3HTML.png)

#### W3C CSS Validator

There were no errors found when the project URL was passed into the validator.

![W3C CSS Validation](/images/pp5-w3cValidation.png)

### Backend

#### PEP8

All python files have been passed through the internal PEP8 installed in GitPod. This was done by typing 'PEP8' along with the name of the app I'd like the tests to run on. Here are the results:

#### Comments App

* models.py - No problems or warnings found
* serializers.py - No problems or warnings found
* tests.py - No problems or warnings found
* urls.py - No problems or warnings found
* views.py - No problems or warnings found

#### Contact App

* models.py - No problems or warnings found
* serializers.py - No problems or warnings found
* tests.py - No problems or warnings found
* urls.py - No problems or warnings found
* views.py - No problems or warnings found

#### Drf_api App

* permissions.py - No problems or warnings found
* serializers.py - No problems or warnings found
* urls.py - No problems or warnings found
* views.py - No problems or warnings found

#### Followers App

* models.py - No problems or warnings found
* serializers.py - No problems or warnings found
* tests.py - No problems or warnings found
* urls.py - No problems or warnings found
* views.py - No problems or warnings found

#### Likes App

* models.py - No problems or warnings found
* serializers.py - No problems or warnings found
* tests.py - No problems or warnings found
* urls.py - No problems or warnings found
* views.py - No problems or warnings found

#### Posts App

* models.py - No problems or warnings found
* serializers.py - No problems or warnings found
* tests.py - No problems or warnings found
* urls.py - No problems or warnings found
* views.py - No problems or warnings found

#### Profiles App

* models.py - No problems or warnings found
* serializers.py - No problems or warnings found
* tests.py - No problems or warnings found
* urls.py - No problems or warnings found
* views.py - No problems or warnings found

## Manual Testing

Here are all of the manual tests I carried out for both frontend and backend:

### Frontend

| Status | **Authentication - User Logged Out**
|:-------:|:--------|
| &check; | Typing 'https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/feed' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/liked' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/posts/create' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/posts/{id}/edit' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/profiles/{id}/edit' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/profiles/{id}/edit/username' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/profiles/{id}/edit/password' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https://portfolio-project-5-sa-0f66607dde4e.herokuapp.com/contactus' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Users can't sign in with the wrong credentials
| &check; | Users can't sign in with fields left blank
| &check; | Users can't sign up with a username that already exists
| &check; | Users can't sign up with fields left blank
| &check; | Users can't sign up with the two password fields not matching


| Status | **Navigation - User Logged Out**
|:-------:|:--------|
| &check; | Clicking the navbar website logo loads the home page
| &check; | Clicking the sign in button in the navbar loads the sign in page
| &check; | Clicking the sign up button in the navbar loads the sign up page
| &check; | Users can't see the 'logged-in' features in the navbar

| Status | **Homepage - User Logged Out**
|:-------:|:--------|
| &check; | Users can view the most followed profiles
| &check; | Users can click on a profile in the most followed profiles and it will redirect the selected profiles page
| &check; | Users can't see follow/unfollow buttons next to profiles in most followed profiles
| &check; | Users can use the search bar to find posts by searching the posts: title, tags, team, stadium, country and the username of the post creator
| &check; | Users can view all posts
| &check; | Users can view all post details in the post list: username, date, title, content, tags, likes, comments, team, stadium and country
| &check; | Users can click the post creators profile and it will redirect them to the selected profiles page
| &check; | Users can't click the like button on a post, it prompts the user to login
| &check; | Users can click the comment button and it will redirect them to the post detail page

| Status | **Post Detail Page - User Logged Out**
|:-------:|:--------|
| &check; | Users can view the most followed profiles
| &check; | Users can click on a profile in the most followed profiles and it will redirect the selected profiles page
| &check; | Users can't see follow/unfollow buttons next to profiles in most followed profiles
| &check; | Users can view all post details: username, date, title, content, tags, likes, comments, team, stadium and country
| &check; | Users can click the post creators profile and it will redirect them to the selected profiles page
| &check; | Users can't click the like button on a post, it prompts the user to login
| &check; | Users can view the comment list
| &check; | Users can't see the create comment form


### Backend

## Lighthouse

I used Chrome Developer Tools Lighthouse to test the applications Performance, Accessibility, Best Practices and SEO. The results are documented below:

![Lighthouse](/images/pp5-lighthouse.png)

## Resolved Bugs

## Unresolved Bugs

# **Features Left to Implement**

* Bookmark - give logged in uers the ability to bookmark posts and have them all in the one place in a bookmarked page.
* Messaging - give logged in users the ability to message other users. Allowing the community to be more connected and give it more of a social media feel.

# **Deployment**

# **Credits**