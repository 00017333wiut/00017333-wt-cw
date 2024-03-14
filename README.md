# Web Application README
---
**
___
This README file provides documentation for the web application project. It includes a brief description of the application, step-by-step instructions on how to run the app locally, a list of application dependencies, and links to the public repo with the web application source code on GitHub and the hosted application.

About the App
--------
The web application is designed to [provide a brief description of the application and its purpose].

Running the App Locally
--------
To run the web application locally, follow these steps:

1. Clone the repository from the public GitHub repo: https://github.com/00017333wiut/00017333-wt-cw

2. Install the application dependencies by running the following command in the terminal:
````
npm install
````
3. Start the application by running the following command:
````
node app.js
````
4. Open your web browser and navigate to [http://localhost:3000] to access the application.

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
Hosted Application: [link to the hosted application]

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
  
