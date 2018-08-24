const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

const flightAPI = require('./api_keys.js')

app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// create route to get single book by its isbn
app.get('/flights', (request, response) => {
  // make api call using fetch
  // const flightAPI = process.env.flightAPI;
  fetch(`http://aviation-edge.com/api/public/flights?key=${flightAPI}&limit=15000`)
  .then((response) => {
      return response.text();
  }).then((body) => {
      // let results = JSON.parse(body)
      // console.log(results);   // logs to server
      response.send(body); // sends to frontend
    });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
