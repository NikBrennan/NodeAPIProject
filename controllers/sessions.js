const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.authenticate = (request, response, next) => {
    try {
        passport.authenticate('local', (error, user) => {
            console.error(error, user);
            if (error || !user) return next(error);

            request.login(user, {session: false}, async error => {
                console.error(error, user);
                if (error) return next(error);

                const body = {_id: user._id, email: user.email};
                const token = jwt.sign({user: body}, process.env.SECRET);

                return response.status(200).json({token});
            });
        })(request, response, next);
    } catch (error) {
        next(error);
    }
}