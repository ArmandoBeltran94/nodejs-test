const request = require('async-request')

module.exports = {
    getHealth: async function(){
        try {
            let url = 'http://localhost:3000/health';
            let response = await request(url,{
                method: 'GET'
            });
            if(response.statusCode == 200){
                return JSON.parse(response.body);
            }
            else{
                return new Error();
            }
        } catch (error) {
            throw error;
        }
    }
}
