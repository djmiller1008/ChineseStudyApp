const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterDiarySchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    character: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    pinyin: {
        type: String,
        required: true
    }
  }, {
    timestamps: true
})

module.exports = CharacterDiary = mongoose.model('CharacterDiary', CharacterDiarySchema);

