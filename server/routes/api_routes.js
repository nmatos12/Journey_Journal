const router = require('express').Router();
const User = require('../models/User');
const Vacation = require('../models/Vacation');

function isAuthenticated(req, res, next) {
    if (!req.session.user_id)
        return res.status(401).send({ error: 'You must be logged in' });

    next();
}

// Get all vacations or get vacations based on search query
router.get('/vacations', async (req, res) => {
    const vacations = await Vacation.find().populate('user');

    res.send(vacations);
});

// Get one vacation by id
router.get('/vacation/:id', async (req, res) => {
    const vacation = await Vacation.findById(req.params.id).populate('user');

    res.send({ vacation: vacation });
});

// Get favorite vacations for a user
router.get('/vacations/user', isAuthenticated, async (req, res) => {
    const user_id = req.session.user_id;

    const user = await User.findById(user_id).populate('favorites');

    res.send(user.favorites);
});

// Add a favorite vacation to a user
router.put('/vacation/:id', isAuthenticated, async (req, res) => {
    const vacation_id = req.params.id;

    const vacation = await Vacation.findById(vacation_id);

    if (!vacation) return res.status(404).send({ error: 'No vacation found by that id.' });

    try {
        const user = await User.findOneAndUpdate({
            _id: req.session.user_id
        }, {
            $addToSet: {
                favorites: vacation._id
            }
        }, { new: true }).populate({
            path: 'favorites',
            populate: 'user'
        });

        res.send({ user: user });
    } catch (err) {
        res.status(500).send({ error: err });
    }
});

// Delete a favorite for a user
router.put('/fav/:id', isAuthenticated, async (req, res) => {
    const user = await User.findOneAndUpdate({
        _id: req.session.user_id
    }, {
        '$pull': {
            favorites: req.params.id
        }
    }, { new: true }).populate({
        path: 'favorites',
        populate: 'user'
    });

    res.send({ user: user });
});

// Create a vacation
router.post('/vacation', isAuthenticated, async (req, res) => {
    const user_id = req.session.user_id;

    try {
        const vacation = await Vacation.create({
            ...req.body,
            user: user_id
        });

        const user = await User.findOneAndUpdate({
            _id: user_id
        }, {
            '$push': {
                favorites: vacation._id
            }
        }, { new: true }).populate('favorites');
        res.send({ user });
    } catch (err) {
        res.status(500).send({ error: err });
    }
});

// Delete a vacation
router.delete('/vacation/:id', isAuthenticated, async (req, res) => {
    const vacation_id = req.params.id;

    // Get the vacation by id
    const vacation = await Vacation.findById(vacation_id);

    if (!vacation) return res.status(500).send({ error: 'That vacation doesn\'t exist.' });

    if (vacation.user !== req.session.user_id)
        return res.status(401).send({ error: 'You are not allowed to delete another user\'s vacation.' });

    await Vacation.findByIdAndDelete(vacation_id);

    res.send({ message: 'Vacation deleted successfully!' });
});


module.exports = router;