const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchSchema = new Schema({
        userName: { type: String, required: true },
        result: { type: String, required: true },
        champion: { type: String, required: true },
        kills: { type: Number, required: true },
        damage: { type: Number, required: true},
        heal: { type: Number, required: true },
        date: { type: Date, required: true },
      });

module.exports = mongoose.model('Match', matchSchema);