exports.handle404s = (_, __, next) => {
    const error = {
        statuseCode: 404,
        message: "Resource not found",
        status: "Not found"
    };

    next(error);
};

exports.errorHandler = (error, _, res, next) => {
    res.status(error.statuseCode || 500).json({
        statuseCode: error.statuseCode,
        status: error.status || "failed",
        message: error.message,
        stack: error.stack,
        ...error
    });

    next();
};