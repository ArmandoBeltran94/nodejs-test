const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Function to check health
async function checkHealth() {
    try {
        const response = await axios.get(`${BASE_URL}/health`);
        return response.data;
    } catch (error) {
        console.error('Error checking health:', error);
        throw error;
    }
}

// Function to create a new user
async function createUser(name, email, password) {
    try {
        const response = await axios.post(`${BASE_URL}/users`, { name, email, password });
        return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error creating user:', error.response.data);
            console.error('Status code:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up request:', error.message);
        }
        throw error;
    }
}

// Function to get a user by ID
async function getUserById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting user by ID:', error);
        throw error;
    }
}

module.exports = {
    checkHealth,
    createUser,
    getUserById
};