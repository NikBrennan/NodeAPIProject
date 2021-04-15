const {index, show, create, update, destroy} = require('../controllers/classes');
const passport = require('passport');

module.exports = router => {
    router.get('/classes', index);
    router.get('/classes/:id', show);
    router.post('/classes', passport.authenticate('jwt', {session: false}), create);
    router.put('/classes', passport.authenticate('jwt', {session: false}), update);
    router.delete('/classes', passport.authenticate('jwt', {session: false}), destroy);
}