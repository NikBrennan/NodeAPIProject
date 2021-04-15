const fs = require('fs');

module.exports = router => {
    fs.readdirSync('./routes/').forEach(file => {
        require(`./routes/${file}`)(router);
        console.log(file);
    });
    return router;
};