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

- [Frontend](#frontend)
    - [Existing Features](#features)
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

- [Backend](#backend)
    - [Database Schema](<#database-schema>)
    - [Technologies Used](<#technologies-used>)
        * [Languages](<#languages>)
        * [Frameworks & Software](<#frameworks--software>)
        * [Libraries](<#libraries>)

- [Features Left To Implement](<#features-left-to-implement>)
- [Testing](#testing)
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

# **Frontend**

## Existing Features

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

## **Technologies Used**

### Languages

* [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides the content and structure for the website
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides interactive elements of the website
* [React.js](https://en.wikipedia.org/wiki/React_(software)) - Provides the base for the frontend components

### Frameworks & Software
* [React Bootstrap](https://react-bootstrap.github.io/) - A CSS framework that helps build responsive sites
* [Balsamiq](https://balsamiq.com/) - Used to create wireframes
* [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories
* [GitPod](https://www.gitpod.io/) - Using GitPod terminal to commit to Git and push to GitHub
* [Heroku](https://en.wikipedia.org/wiki/Heroku) - Used to deploy the live project
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test site performance
* [AmIResponsive](https://ui.dev/amiresponsive) - Used for responsiveness check across devices
* [Favicon](https://favicon.io/) - Used to create the favicon
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness
* [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project
* [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
* [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
* [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code

# **Backend**

## Database Schema

## **Technologies Used**

# **Features Left to Implement**

# **Testing**

# **Deployment**

# **Credits**