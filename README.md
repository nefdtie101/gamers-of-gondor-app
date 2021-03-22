# Gamers of Gondor Web app

## link to deployed app
https://gamerofgondor.co.za/


## Purpose of application 
The application will be created for the Gamers of Gondor gaming clan. The app will be used to mange and set up 
sports events as well as manage info about clan members. 

## System architecture
This project will be created in the MERN stack. Mongo db, Express.js, React.js and Node.js. The app will be hosted on a 
linode server running ubuntu. This is a cheap way of deploying an app, and you can have other services running in background
like nginx reverse proxy. I will also be using helmet for security. JWT will be used to authenticate users 

## How to install 
Type npm install on both the front and back end of the application to install it. 
Then start the back and front end. 

## How to use 
Go to sine in button and then create your account. 
Then sine in and verify your email.
Then you will see the upcoming events. 

## Security 
I used helmet to secure express. I don't have api keys. But they will be stored in a env file if it will be published to github.

## Node mailer 
Node mailer is used to verify the email of the users.

## How it is deployed 
This app is deployed on linode and is running with a nginx reverse proxy to make it easier to run ssl. 


## User stories 
* Harkonsoul
  * I want to be able to sine up for sports team.
  * I want to know if we will have people for a mach.
    
* Bubblegum 
  * I want to be able to set up sports events.
  * I want to keep track of users roles.
  * I want to see who is king of what 
    
* Nefdtie
  * I want to see who is admin and make other user admins 
  * I want to be able to schedule sports events.   

## Functional components
* The user should be able to create an account. 
* The user should be able to log in.  
* An admin user should be able to schedule esports event. 
* Users should be able to sine up for an esport event.
* User should be able to withdraw from an esports event.
* Users should be able to see upcoming esports events.

## Non Functional components
* User should be able to reset their password 
* Users should be able to change their profile pick 
* User should be able to edit details 
* User should be able to log out. 



