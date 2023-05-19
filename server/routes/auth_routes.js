const router = require('express').Router();
const User = require('../models/User');
const Vacation = require('../models/Vacation');

// http://localhost:3333/auth/register
// Register User
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        req.session.user_id = user._id; // Logging the user in

        res.send({ user });
    } catch (err) {
        res.status(403).send({ error: err.message });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    }).populate({
        path: 'vacations',
        populate: 'user'
    });
    console.log(user)
    // If no user is found, stop and send an error message
    if (!user) return res.status(402).send({ error: 'User with that email not found.' });

    // If password does not match, stop and send an error message
    const valid_password = await user.validatePass(req.body.password);

    if (!valid_password) return res.status(401).send({ error: 'Password does not match.' });

    // Log the user in
    req.session.user_id = user._id; // Logging the user in

    res.send({ user: user });
});

// Log out User
router.get('/logout', (req, res) => {
    req.session.destroy();

    res.send({ message: 'User logged out' });
});

// Client side check to see if user is logged in and get their data to
// use on the front end
router.get('/authenticated', async (req, res) => {
    const user_id = req.session.user_id;

    if (!user_id) return res.send({ user: null });

    const user = await User.findById(user_id).populate({
        path: 'vacations',
        populate: 'user'
    });

    res.send({ user: user });
});

module.exports = router;