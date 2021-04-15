const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    classType: {
        type: String,
        enum: ["Necromancer", "Wizard", "Crusader", "Demon Hunter", "Witch Doctor", "Monk", "Barbarian"],
        required: true,
        unique: true,
        dropDups: true
    }
}, {
    timestamps: true
});

ClassSchema.methods.getClasses = async function () {
    return await mongoose.model('Character').find({
        classType: this._id
    });
}

module.exports = mongoose.model('Class', ClassSchema);