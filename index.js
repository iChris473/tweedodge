
require('dotenv').config();
const express = require('express');
const app = express();

app.enable('trust proxy')

app.use(function(request, response, next) {

    if (process.env.NODE_ENV != 'development' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
})

// serve your css as static
app.use('/public_files', express.static('public_files'));

// index route for User Domain
app.get("/", (req, res) => res.sendFile(__dirname + "/public.html"))

// index route for User DomainJ
app.get("/presale", (req, res) => res.sendFile(__dirname + "/public.html"))

// index route for User Domain
app.get("/whitepaper", (req, res) => res.sendFile(__dirname + "/whitepaper.html"))

// index route for User Domain
app.get("/coming", (req, res) => res.sendFile(__dirname + "/coming.html"))

// index route for User Domain
app.get("/audit", (req, res) => res.sendFile(__dirname + "/audit.html"))

const port = process.env.PORT || 8400

app.listen(port, () => console.log(`Backend running on ${port}`))
