const User = require('../models/user');

exports.create = async (request, response, next) => {
    try {
        const {name, email, password} = request.body;
        const user = await User.register({
            name,
            email
        }, password);

        response.status(200).json({message: 'Successfully created user.', user});
    } catch (error) {
        next(error);
    }
}