const express = require('express');
require('dotenv').config();

const app = express();

// Required routes
const pokedexApi = require('./routes/pokedexApi');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/pokedexApi', pokedexApi);

//serve static files
app.use(express.static('build'));

// App Set PORT
const PORT = process.env.PORT || 5000;

/* LISTENING */
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
    
});