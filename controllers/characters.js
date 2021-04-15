const Character = require('../models/character');

exports.index = async(_, response, next) => {
    try {
        const characters = await Character.find().populate('class');

        response.status(200).json(characters);
    } catch (error) {
        next(error);
    }
}

exports.show = async(request, response, next) => {
    try {
        const {id} = request.params;
        const character = await Character.findById(id).populate('class');

        response.status(200).json(character);
    } catch (error) {
        next(error);
    }
}

exports.create = async(request, response, next) => {
    try {
        const {
            name,
            classType,
            gamemode,
            hardcore
        } = request.body;

        const character = await Character.create({
            name,
            classType,
            gamemode,
            hardcore
        });

        response.status(200).json({
            message: "Character created, have fun playing!",
            status: "Success",
            character
        });
    } catch (error) {
        next(error);
    }
}

exports.update = async(request, response, next) => {
    try {
        const {
            name,
            classType,
            gamemode,
            hardcore
        } = request.body;

        await Character.findOneAndUpdate({_id: id},{
            name,
            classType,
            gamemode,
            hardcore
        });

        const character = await Character.findById(id);

        response.status(200).json({
            message: "Character updated, have fun playing!",
            status: "Success",
            character
        });
    } catch (error) {
        next(error);
    }
}

exports.destroy = async(request, response, next) => {
    try {
        const {id} = request.body;

        await Character.findOneAndDelete({_id: id});

        response.status(200).json({
            message: "Character deleted, have fun going outside!",
            status: "Success",
            character
        });
    } catch (error) {
        next(error);
    }
}