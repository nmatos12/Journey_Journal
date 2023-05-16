require('dotenv').config();
const express = require('express');
const db = require('./config/connection');
const session = require('express-session');
const path = require('path');
const PORT = process.env.PORT || 3333;
const in_prod = process.env.PORT;

// const api_routes = require('./routes/api_routes');
const auth_routes = require('./routes/auth_routes');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

if (in_prod) {
    app.enable('trust proxy');
}

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.PORT ? true : false }
}));

// app.use('/api', api_routes);
app.use('/auth', auth_routes);

if (in_prod) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(process.cwd(), '../client/build/index.html'));
    });
}

db.once('open', () => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT));
});