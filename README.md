# gabify-on-netlify

Realtime Chat App (React &amp; NodeJS &amp; Socket.io)

### [App Site](https://gabify-on.netlify.app/)

## Introduction:

This is a code repository for the realtime chat application built with the help of React, NodeJS and Socket.io.
The use of any database for storage of a chat history, as well as user authorization and security measures, were not foreseen in this small test project, therefore not implemented. Yet to be developed as soon as priority list in terms of other experimental web projects is caught up and kept up. ;)
This project deployed on Heroku and Netflify as platforms for backend and frontend, correspondingly.

## Setup:

run `npm i && npm start` for both client and server side to start the development server.

## Deployment

### Backend

Before pushing the server side code to Heroku, login first:
```heroku login```
Then being inside the "server" folder initialize a remote git connected to heroku:
`$ cd server`
`$ git init`
`$ heroku git:remote -a react-nodejs-chat-app2020`

If there is existing repository, use Git to clone react-nodejs-chat-app2020's source code to your local machine.

`$ heroku git:clone -a react-nodejs-chat-app2020`
`$ cd react-nodejs-chat-app2020`

Deploy your changes
Commit all changes and push/deploy them to Heroku using Git:
```$ git add .```
```$ git commit -am "make it better"```
```$ git push heroku master```

### Frontend

Switch to the "client" folder.
If you don't want to generate source maps for your code, add a file ".env" to the root of the client folder and paste there a configuration string:
```GENERATE_SOURCEMAP=false```
Create your build.
```npm run build```
Then login on netlify.com and navigate to the page designed for a list of sites.
In order to prepare the client side of your current app for deployment on Netflify without using Git, just drag and drop your entire client folder there.
Then install netlify cli globally and login via your terminal.
```install netlify-cli -g```
```netlify login```

Now you are good to go with the deployment via the terminal:
```netlify deploy```
Fot the very first deployment agree that you are going to create a new site and choose on which team. you may skip the name of the site for now.
When it requires info about the publish directory, type in a relative path to the build folder:
```./build```
First you'll get a draft Netlify url and as soon as you are satisfied with the results of this test deployment, you can deploy your prod version.
```netlify deploy --prod```


Chat "Join" page:

![Chat "Join" page](https://github.com/KseniyaY/gabify-on-netlify/blob/master/client/public/chat_modal_1.png)

Chat modal window (1st user):

![Chat modal (1st user)](https://github.com/KseniyaY/gabify-on-netlify/blob/master/client/public/chat_modal_2.png)

Chat modal window (3rd user):

![Chat modal (3rd user)](https://github.com/KseniyaY/gabify-on-netlify/blob/master/client/public/chat_modal_3.png)

Chat modal window (2nd user):

![chat_modal_(2nd user)](https://github.com/KseniyaY/gabify-on-netlify/blob/master/client/public/chat_modal_4.png)

Chat modal window (3rd user):

![chat_modal_(3rd user)](https://github.com/KseniyaY/gabify-on-netlify/blob/master/client/public/chat_modal_5.png)
