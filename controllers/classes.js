const Class = require('../models/class');

exports.index = async(_, response, next) => {
    try {
        const classes = await Class.find();

        response.status(200).json(classes);
    } catch (error) {
        next(error);
    }
}

exports.show = async (request, response, next) => {
    try {
      const { id } = request.params;
      const classType = await Class.findById(id);
      const characters = await classType.getClasses();
  
      response.status(200).json({ ...classType._doc, characters });
    } catch (error) {
      next(error);
    }
};

exports.create = async(request, response, next) => {
    try {
        const {classType} = request.body;

        const createdClass = await Class.create({
            classType    
        });

        response.status(200).json({
            message: "Class created, have fun picking!",
            status: "Success",
            createdClass
        });
    } catch (error) {
        next(error);
    }
}

exports.update = async(request, response, next) => {
    try {
        const {id, classType} = request.body;

        await Class.findOneAndUpdate({_id: id},{classType});
        const createdClass = await Class.findById(id);

        response.status(200).json({
            message: "Class updated, have fun picking!",
            status: "Success",
            createdClass
        });
    } catch (error) {
        next(error);
    }
}

exports.destroy = async(request, response, next) => {
    try {
        const {id} = request.body;

        await Class.findOneAndDelete({_id: id});
        const classType = await Class.findById(id);

        response.status(200).json({
            message: "Class deleted, I hope you're happy!",
            status: "Success",
            classType
        });
    } catch (error) {
        next(error);
    }
}