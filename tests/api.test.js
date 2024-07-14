import request from 'supertest'
import app from '../index'

// afterEach(() => {
//     app.close();
//   });

describe('GET /api/Weeather', () =>{

    test('should response with information of external api as city, temperature and weather', async () =>{
        const response = await request(app).get('/api/weather?city=navojoa').send()
        
        expect(response.statusCode).toBe(200);
        expect(response._body.city).toBeDefined()
        expect(response._body.temperature).toBeDefined()
        expect(response._body.weather).toBeDefined()
    })
})