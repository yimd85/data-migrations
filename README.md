#Data Migrations Walkthrough

<b> instructions</b>
Terminal commands(that I did):
cd baby-names (you will need to do this)
npm install pg --save
npm install sequelize --save
npm install sequelize-cli --save
alias sequelize="node_modules/.bin/sequelize"
source ~/.bash_profile
sequelize
sequelize init


Go to the config/config.json and update the contents of
Dialect = postgres
Username = “your Postgres user name”
Database = baby_names_development (don’t need to do this. I had to)


Go back into the terminal and type in these commands:
sequelize model:create --name profile --attributes 'firstname:string lastname:string bio:text'
sequelize model:create --name asset --attributes 'location:string type:string note:text'
sequelize model:create --name toy --attributes 'name:string note:text'
sequelize db:migrate

Open up another terminal session and type in these following commands:
psql
\c baby_names_development
\dt+;
(See that the tables now have appeared)

Go back to the bash terminal session and type:
sequelize db:migrate:undo

Go to the psql terminal session and type:
\dt+;
“See that 1 table has disappeared”

Go back to the bash terminal session and type:
sequelize db:migrate:undo

Go to the psql terminal session and type:
\dt+;
(See that 1 table has disappeared)

Go back to the bash terminal session and type:
sequelize db:migrate:undo

Go to the psql terminal session and type:
\dt+;
(See that 1 table has disappeared)

Go back to the bash terminal session and type:
sequelize db:migrate

Go to the psql terminal session and type:
\dt+;
(See the table has appeared)

Create a new migration file called add-user-column-to-toys.js in the migrations folder. This is manual add (touch command needed)

In the 'up' function call the queryInterface function that adds a column called 'userId' to the 'Toys' table. In the 'down' function call the queryInterface function that removes that column from the table

This is there we code

Go to the bash terminal and run the command “sequelize db:migrate”

Go to the psql terminal and run command “select * from toys;”.  See that columns which were stated on the add-user-column-to-toys.js file were added

Go to the bash terminal and run the command “sequelize db:migrate:undo”

Go to the psql terminal and run command “select * from toys;”.  See that columns that were stated on the add-user-column-to-toys.js file were removed

Go to the bash terminal and type in command:
sequelize seed:create --name add-dummy-users

Go to your editor and see a file has been created
This is where we code.

Go to the bash terminal and type in command
sequelize db:seed:all

Go to the psql terminal and type in command
Select * from profiles
(See that we added 3 entries)
