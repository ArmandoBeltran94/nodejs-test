import request from 'supertest'
import app from '../index'

describe('GET / Users', () =>{

    test('should response with a 200 status code', async () => {
        const response = await request(app).get("/health").send();
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
        expect(response.body.timestamp).toBeDefined()
    })

    test('should response with a id of new user created', async () => {
        const response = await request(app).post("/users").send({
          name: 'Armando B',
          email: 'armando.b@example.com',
          password: '123456789'
        })
        expect(response.statusCode).toBe(200);
        expect(response.body._id).toBeDefined()
    })

    test('should response all information of especific user', async () => {
        const response = await request(app).get('/users/6691964122dce38d16742cab').send()

        expect(response.statusCode).toBe(200);
        expect(response.body[0].name).toBeDefined();
        expect(response.body[0].email).toBeDefined();
        expect(response.body[0].password).toBeDefined();
    })

});
