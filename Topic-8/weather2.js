let request = require('request');

let apiKey = `3095500c07e157681f0d3b4f947d5002`;
let location = 'Rajpura';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', body);
}
});

