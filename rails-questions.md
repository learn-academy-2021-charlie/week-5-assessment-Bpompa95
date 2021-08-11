# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL? SQL means structured query language and is used to communicate with a database AND SQL was developed in 1979.


2. What the PostgreSQL query that would return all the content in a particular table?
SELECT all
FROM table;

3. What is the command to create a new Rails application with a PostgreSQL database?
rails create new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
rails g model Meals breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one? 
migration is a file that is generated through a rails command that will allow you to make changes to the database. This can include editing a column's name or data type, adding a new column or removing a column.


6. What is the command to generate a migration file?
$ rails generate migration action_name_here
$ rails db:migrate


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
The naming convention for the Rails model is capitalized and singular. The database table that it creates is plural and snake_case.


8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
The schema file is data that rails has put together for us after we have given it certain commands. It shows us what we have created like our datatable's name and columns. It is not recommended to modify the schema directly because you can break the database.

9. What is the Rails console?
Rails console is a command line program for interacting with the Rails applications. It has the full power of the Ruby language and Rails environment.

10. What is the Rails console command to see all the content in a particular table?
Table.all
