const express = require('express');
const router = express.Router();
const axios = require('axios');
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `${BASE_URL}`    
}).then((result) => {
    if(result.rows.length > 0) {
        res.send(result)
        console.log('Result.rows', result);
    } else {
        res.send({});
    }
}).catch((error) => {
    console.log('Something went wrong in /GET pokemon', error);
    res.sendStatus(500);
    });
});

module.exports = router;