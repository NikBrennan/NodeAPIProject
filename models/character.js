const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    classType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    gamemode: {
        type: String,
        enum: ["Standard", "Seasonal"]
    },
    hardcore: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', CharacterSchema);