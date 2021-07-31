const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const championSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    championId: Number,
    image: String
})

championSchema.set('toJSON', {
    transform: (document, ret) => {
        ret.id = ret._id.toString()
        delete ret._id  
        delete ret.__v
    }
})

championSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Champion', championSchema)
