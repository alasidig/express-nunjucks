
 # express-fullstack-todo
Sample Todo App using nunjucks template-engin
# How to run
- run `node index.js`
- open a browser on http://127.0.0.1:5000
- Select a task from the list to see the details of the task.
# Brief Explaination
## index.js
-	It creates an express app and set the template engine as nunjucks 
-	The main route renders the list template for get request passing the list of task
-	The /:id route renders the details of the task sending the task with the given id
-	For simplicity the server 
## views/base.html
-	The parent of the templates. Contains the common html and CSS
-	Jus an HTML file that contains a placeholder for the content to be placed in the `{% block content %}`
## views/list.html
-	Used to render the list of the tasks
-	Uses `{% for task in tasks %}` to iterate over the list of tasks
-	`{{task.title|upper}}` to access the title of the task and use the `upper` filter to convert it to uppercase 
## views/item.html
-	`{% set isDone='done' if task.done else ''%}` conditionally assign a variable `isDone` either to ‘done’ or ‘’ 
-	Based on the value of `isDone` add a class `.done` to show a ~~deleted task~~ 
-	Similarly adds `disabled` attribute to the button for the done tasks.

