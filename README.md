# Learning Node, Express, MySQL, Heroku and Handlebars
I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.I generally followed the MVC design pattern while using Node and MySQL to query and route data in the app, and Handlebars to generate HTML.

## Lesssons Learned
This was an important journey on my development path as I was confronted with an array of new technologies and skills to improve. This was my first instance of hosting a MySQL database in Heroku and query data from an client side HTML using Handlebars. In addition, I built a custom ORM that should help me appreciate the functionality of Sequelize moving forward. Fun times!

## Link to deployed Burger Choice
[Burger-Choice](https://glacial-wildwood-18849.herokuapp.com/)

## Installation
I used MySQL to store the data and node.js, express.js, and handlebars to build the client - server nexus. Finally after testing the application on my local machines, I deployed the app to Heroku. 

Check out Heroku [Heroku](https://devcenter.heroku.com/)
handlebars [Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars)
node [Node](https://nodejs.org/en/)
and MySQL [MySQL](https://dev.mysql.com/doc/)

## Key Code Snippets
A few key code that helped display data in the format desired: 

This was my first experience with handlebars and they had some nice functionality. In the snippet below, I was able to display HTML text with data from MySQL based upon the boolean value of a field on the database (which is called 'devoured'). If the boolean value was false, those items would appear on the left and if the boolean value was true then it would appear on the right (basically a diffent column within bootstrap styling). 
```
f<div class="row">
  <div class="col-md-6">
    <h3>Burgers Ready to Eat</h3>
    <ul>
      {{#each burgers}}
      {{#unless devoured}}
      {{> burgers/burger-block devoured=false}}
      {{/unless}}
      {{/each}}
    </ul>
  </div>
  <div class="col-md-6">
    <h3>Burgers Consumed</h3>
    <ul>
      {{#each burgers}}
      {{#if devoured}}
      {{> burgers/burger-block devoured=true}}
      {{/if}}
      {{/each}}
    </ul>
  </div>
</div>
```

### GIF of Applicaton
![App](https://media.giphy.com/media/d5SiMG2NvvS5xNsiz7/giphy.gif)


## Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)

