const request = require('supertest');
const {app, server} = require('../../index');
const User = require('../../models/user');

jest.mock('../../models/user', () => ({
    save: jest.fn(),
    find: jest.fn()
}));

beforeEach(() => {
    jest.resetAllMocks();
});

// afterAll((done) => {
//     server.close(done);
// });

describe('Routes', () => {
    describe('GET /health', () => {
        it('should return status OK', async () => {
            const res = await request(app).get('/health');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('status', 'OK');
            expect(res.body).toHaveProperty('timestamp');
        });
    });

    describe('POST /users', () => {
        it('should create a new user', async () => {
            const mockUser = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
            User.save = jest.fn().mockResolvedValue(mockUser);

            const res = await request(app)
                .post('/users')
                .send(mockUser);

            expect(res.statusCode).toEqual(403);
        });
    });

    describe('GET /users/:id', () => {
        it('should return a user by id', async () => {
            const mockUser = { _id: '507f191e810c19729de860ea', name: 'John Doe', email: 'john@example.com' };
            User.find = jest.fn().mockResolvedValue([mockUser]);

            const res = await request(app).get(`/users/${mockUser._id}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual([mockUser]);
        });
    });
});