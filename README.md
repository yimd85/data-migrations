#Data Migrations Walkthrough
<br/>

<b> instructions</b>

<br/>

Terminal commands(that I did):
<ul>
  <li>cd baby-names (you will need to do this)</li>
  <li>npm install pg --save</li>
  <li>npm install sequelize --save</li>
  <li>npm install sequelize-cli --save</li>
  <li>alias sequelize="node_modules/.bin/sequelize"</li>
  <li>source ~/.bash_profile</li>
  <li>sequelize</li>
  <li>sequelize init</li>
</ul>

<br/>

Go to the config/config.json and update the contents of
<ul>
  <li>Dialect = postgres</li>
  <li>Username = “your Postgres user name”</li>
  <li>Database = baby_names_development (don’t need to do this. I had to)</li>
</ul>

<br/>

Go back into the terminal and type in these commands:
<ul>
  <li>sequelize model:create --name profile --attributes 'firstname:string lastname:string bio:text'</li>
  <li>sequelize model:create --name asset --attributes 'location:string type:string note:text'</li>
  <li>sequelize model:create --name toy --attributes 'name:string note:text'</li>
  <li>sequelize db:migrate</li>
</ul>

<br/>

Open up another terminal session and type in these following commands:
(See that the tables now have appeared)
<ul>
  <li>psql</li>
  <li>\c baby_names_development</li>
  <li>\dt+;</li>
</ul>

<br/>

Go back to the bash terminal session and type:
<ul>
  <li>sequelize db:migrate:undo</li>
</ul>

<br/>

Go to the psql terminal session and type:
(See that 1 table has disappeared)
<ul>
<li>\dt+;</li>
</ul>

<br/>

Go back to the bash terminal session and type:
<ul>
  <li>sequelize db:migrate</li>
</ul>

<br/>

Go to the psql terminal session and type:
(See that 1 table has appeared)
<ul>
<li>\dt+;</li>
</ul>

<br/>

Go back to the bash terminal session and type:
<ul>
  <li>sequelize db:migrate:undo</li>
</ul>

<br/>

Go to the psql terminal session and type:
(See that 1 table has disappeared)
<ul>
<li>\dt+;</li>
</ul>

<br/>

Go back to the bash terminal session and type:
<ul>
<li>sequelize db:migrate</li>
</ul>

<br/>

Go to the psql terminal session and type:
(See the table has appeared)
<ul>
<li>\dt+;</li>
</ul>

<br/>

Create a new migration file called add-user-column-to-toys.js in the migrations folder. This is manual add using 'touch' command.

<br/>

In the 'up' function call the queryInterface function that adds a column called 'userId' to the 'Toys' table. In the 'down' function call the queryInterface function that removes that column from the table
This is there we code.

<br/>

When finished. Go to the bash terminal and run the command “sequelize db:migrate”

<br/>

Go to the psql terminal and run command “select * from toys;”.  See that columns which were stated on the add-user-column-to-toys.js file were added

<br/>

Go to the bash terminal and run the command “sequelize db:migrate:undo”

<br/>

Go to the psql terminal and run command “select * from toys;”.  See that columns that were stated on the add-user-column-to-toys.js file were removed

<br/>

Go to the bash terminal and type in command: "sequelize seed:create --name add-dummy-users"
Go to your editor and see a file has been created. This is where we code.

<br/>

Go to the bash terminal and type in command: "sequelize db:seed:all"

<br/>

Go to the psql terminal and type in command. Select * from profiles. See that we added 3 entries.
