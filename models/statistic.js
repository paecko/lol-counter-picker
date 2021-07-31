const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types;

const statisticSchema = new Mongoose.Schema({
  championName: String,
  winMap: Array
}
)

statisticSchema.set('toJSON', {
  transform: (document, ret) => {
      ret.id = ret._id.toString()
      delete ret._id  
      delete ret.__v
  }
})

module.exports = Mongoose.model('Statistic', statisticSchema)
