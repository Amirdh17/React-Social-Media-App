# React Social Media App
## To practice react js concepts
## INTRODUCTION
  This is a Social media app developed using the react.js technology. Using this app, user can write, edit, delete and search the posts. It is a Single Page Application (SPA) which is developed using react router concept. Objective of this project is to concrete the basic concepts and practice the advanced concepts includes react router, axious api request, custom hooks, Context api and Single Page Application (SPA). And also to practice essential web development skills including styling with CSS, implementing CRUD (Create, Read, Update, Delete) operations, and integrating external data through the Fetch API. Fake api server is created using the "json-server" package and is used to store the data by implementing CRUD operation.

## Technologies and Tools used
  Key technologies and tools used in this social media app are,
* React.js
* React Router
* Axious for API request
* Custom hooks
* Context API
* CRUD operations
* Basic React concepts (hooks, props drilling, json-server, controlled inputs, react css).

## Project Structure
  In this project, there are folders includes Data, node_modules, public, and src. Files include package.json and package-lock.json. Data folder includes db.json which is created by "json-server". db.json act as a fake api and allows CRUD operations to store the data. node_modules folder includes the installed package's definition files. public folder includes basic files to run these application aspecially index.html file which include the head tag (meta data of the website). In src folder, all the functional components are present, each one responsible for unique feature in the application.

## Key Features
  User can write a paragraph with a title and post them in this application. User can read the post which was created by them. User can open a particular post and able edit the post and also able to delete the post. Using the search box, user can search for a post by particular word or passage which is matched to the required post. This is a Single Page Application therefore rendering the required functional component could be fast than usual. Using the axious api request, CRUD (Create, Read, Update, Delete) operations were implemented with fake api server which created using "json-server" package.

## Implementation Details
### React Router
  The package "react-router" is instaled from npm website. In index.js, import Browser Router tag from react-router-dom and make the app component place within the Browser Router tag. In app component, import routes and route from react-router-dom, and within Routes tag, create a path for each functional component therefore we can link them to respective elements. 
### Axios API request

