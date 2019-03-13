### Pear Up!
> A platform to match people in a shared space to exchange common interests and build a sense of community

Are you someone that works in a shared space? A comnpany that recently inherit new employees and not sure how to make them talk to each other? 
Want to make new friends but is afraid and not sure what to say? Then our app will help you connect with others with similar interesrs as you!

## Functionality
Register to our app, select your interests, once you're on the landing page, our app will show you a list of people that have common interests as you base on an algorithm on your interests. You can also make a card to invite others to join you in moment of, a quick lunch or coffee meetup with someone new could be fun! 

## Tech Stack

* **React.JS**
* **Rails 5.2 API**
* **React Router**
* **HTML 5/ CSS 5**
* **PostgreSQL**
* **Apollo** (Deprecated, will be re-implement in the future)
* **GraphQL** (Deprecated, will be re-implement in the future)

The original tech stack has GraphQL and Apollo which was not taught at [Lighthouse Labs](https://lighthouselabs.ca/web-bootcamp). However, we ran into a time problem and have to put it on hold.

## Getting started
```
clone our project

cd into /backend folder      #setting up backend Rails
bundle install               #Install dependencies
rails db:migrate             #Running database migration
rails db:seed                #Seeds the database
rails s -p 3001 -b 0.0.0.0   #To run our backend server on port 3001

on a new terminal
cd into /client              #Setting up frontend for React
npm install                  #Installing all the dependencies
npm start                    #Running our app on port 3000

on your browser

navigate to localhost:3000/login
```

## To be implemented

    - GraphQL Rails backend
    - Apollo in frontend
    - An automated bot to send notification to people with similar matches
    - A more responsive calendar
    - Remove Mailto form and use sms/notification 






