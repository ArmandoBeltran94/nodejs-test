const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const router = require('../../router/routes');
const User = require('../../models/user');

const app = express();
app.use(express.json());
app.use('/', router);

beforeAll(async () => {
    const url = `mongodb+srv://nodeTest:S9F9UVKMQCz8Aqa9@cluster0.mmhu5rf.mongodb.net/prueba?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /health', () => {
    it('should return status OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'OK');
    });
});

259.76

describe('POST /users', () => { 
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                name: 'Armando Beltra',
                email: 'armando@adroit.com',
                password: 'asdf1234L.'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
        expect(res.body).toHaveProperty('name', 'Armando Beltra');
        expect(res.body).toHaveProperty('email', 'armando@adroit.com');
    });
});

describe('GET /users/:id', () => {
    it('should return a user by id', async () => {
        const user = new User({ name: 'Jane Doe', email: 'jane@example.com', password: 'password123' });
        await user.save();

        const res = await request(app).get(`/users/${user._id}`);
        expect(res.statusCode).toEqual(200);
        const body = res.body[0]
        expect(body).toHaveProperty('_id', user._id.toString());
        expect(body).toHaveProperty('name', 'Jane Doe');
        expect(body).toHaveProperty('email', 'jane@example.com');
    });
});