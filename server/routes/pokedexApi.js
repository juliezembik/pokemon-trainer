const express = require('express');
const router = express.Router();
const axios = require('axios');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

P.getPokemonByName('Vulpix')
    .then((response) => {
        console.log('Response for Vulpix', response);
    }).catch((error) => {
        console.log('Error in Vulpix', error);
        
    });

module.exports = router;