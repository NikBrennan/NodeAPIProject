const {index, show, create, update, destroy} = require('../controllers/characters');
const passport = require('passport');

module.exports = router => {
    router.get('/characters', index);
    router.get('/characters/:id', show);
    router.post('/characters',passport.authenticate('jwt', {session: false}), create);
    router.put('/characters', passport.authenticate('jwt', {session: false}), update);
    router.delete('/characters', passport.authenticate('jwt', {session: false}), destroy);
}