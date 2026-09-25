const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./util/database');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Signup', 'signup.html'));
});

sequelize
    .sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server running on http://localhost:3000');
        });
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = app;
