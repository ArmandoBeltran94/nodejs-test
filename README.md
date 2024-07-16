### Instructions to run the Nodejs test

1.- First clone the repository on your local computer with the following url

https://github.com/ArmandoBeltran94/nodejs-test.git

2.- Install the necessary packages that the project needs with `npm install`

3.- Launch the endpoints service, execute the `npm run server` command, which is already configured in the project

4.- In order to test all the endpoints, the following urls are listed for each one.

- **GET /health** http://localhost:3000/health
- **GET /users/:id** http://localhost:3000/users/
    
          ```json
            {
              "name": "Jose Bel",
              "email": "JoArm.bv@mail.com",
              "password": "asdf1234L."
            }
          ```

- **GET /external-data** http://localhost:3000/api/weather?city='yourCity'
  
    change 'yourCity' to the city you want to know the weather
  
- **POST /users** http://localhost:3000/users/'idOfUser'
  
    You can use the id of the previously created record by replacing it in the 'idOfUser' url with the new id

5.- To run the project tests you can execute the command `npm run test`
     
6.- To review the Swagger documentation you can access the following url
    http://localhost:3000/Docs/
  

### Thank you very much for your time and attention