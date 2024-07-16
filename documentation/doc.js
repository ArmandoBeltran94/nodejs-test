import { Router } from "express";
const usersRouter = Router();
import users from '../models/user.js'



/** GET Methods */
    /**
     * @openapi
     * '/health':
     *  get:
     *     tags:
     *     - User Controller
     *     summary: Get a status
     *     parameters:
     *      - name: 
     *        in: 
     *        description: 
     *        required: false
     *     responses:
     *      200:
     *        description: OK
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    usersRouter.route('/health').get('') 

    /**
     * @openapi
     * '/users/{id}':
     *  get:
     *     tags:
     *     - User Controller
     *     summary: Get a user by id
     *     parameters:
     *      - name: id
     *        in: path
     *        description: The id of the user
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    usersRouter.route('/users/:id').get(users) 

     /** POST Methods */
    /**
     * @openapi
     * '/users/':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Create a new user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - name
     *              - email
     *              - password
     *            properties:
     *              name:
     *                type: string
     *                default: Armando Beltran v 
     *              email:
     *                type: string
     *                default: mando.bv@mail.com
     *              password:
     *                type: string
     *                default: asdf1234L.
     *     responses:
     *      200:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    userRouter.route('/users').post(users);

    /** External API POST Methods */
    /**
     * @openapi
     * '/api/weather':
     *  get:
     *     tags:
     *     - API Controller
     *     summary: Get the current weather data for a specified city
     *     parameters:
     *      - name: city
     *        in: query
     *        description: the city that wants to know the weather
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    usersRouter.route('/api/wather').get() 

    export default usersRouter;