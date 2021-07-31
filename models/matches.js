const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types;

const matchSchema = new Mongoose.Schema({
  gameId: {
    type: Number,
    unique: true,
    required: true,
    dropDups: true
  }
},
    {strict:false}
)
module.exports = Mongoose.model('Match', matchSchema)
