The product api is running successfully

nodemon server.js to start the server

Open your postman and type:

1. http://localhost:8000/products/create in the enter request URL section and press enter.

    

2. On the same address, change the method to POST, click body and select “x-www-form-urlencoded”.
Then, enter name as the key and the corresponding task name as value.
After this, click on send button.
This should give you a response 200 ok.

3. for delete select delete and enter http://localhost:8000/products/----id------
----id----: id of the product

4. update has the same procedure.

------created a well defined and scaleable directory structure with 
routes/models/controllers/config folder in it.

------added comments in some places.

------added readme.