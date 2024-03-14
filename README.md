# Coursework no.2  README
---

This README file provides documentation for the web application project. It includes a brief description of the application, step-by-step instructions on how to run the app locally, a list of application dependencies, and links to the public repo with the web application source code on GitHub and the hosted application.

About the App
--------
This web application was created to fulfill Web Technology module's requirements and does not represent an actual company or service. ```00017333-wt-cw``` is a simple Node.js web application for storing and editing the Local Farmers Market Online Directory. The applcation follows the
CRUD functionality which allows users to view the existing list of items for sale, to edit these items, to delete them, and add some new ones. Each product has a completely unique uuid, a name, a manifacture date, a name of a farm it was produced at, and the price.

Running the App Locally
--------
To run the web application locally, follow these steps:

1. Clone the repository from the public GitHub repo: https://github.com/00017333wiut/00017333-wt-cw

2. Install the application dependencies by running the following commands in the terminal:
````
npm init -y
````
````
npm i express express-validator pug body-parser nodemon uuid
````
3. Start the application by running the following command:
````
npm start
````
4. Open your web browser and navigate to http://localhost:3000 to access the application. In orgder to navigate between the pages click on the add/update buttons on the page, or optionally
open it manually: http://localhost:3000/add / http://localhost:3000/update/item-id

Application Dependencies
--------
The web application has the following dependencies:
- body-parser (1.20.2),
- express (4.18.3),
- express-validator (7.0.1),
- nodemon (3.1.0),
- pug (3.0.2),
- uuid (9.0.1)

Links
--------
Public GitHub Repo: https://github.com/00017333wiut/00017333-wt-cw

Hosted Application: 

Project Structure
--------
The project structure of the web application follows the recommended structure:

/controllers

    /api

    index.js

        /ticket

            index.js

    /web

        /home

            index.js

/data

    mock_db.json

/public

    /images

    /javascripts

    /styles

/routes

    products.js

    /api

      index.js

      /ticket

        index.js

    /web

        index.js

        /home

            index.js

/services

    index.js

    /ticket

      index.js

/validators

    /ticket

        index.js

/views

    home.pug

    footer.pug

    /home

        index.pug

        add_update.pug

app.js

.gitignore

package-lock.json 

package.json

README.md
  
