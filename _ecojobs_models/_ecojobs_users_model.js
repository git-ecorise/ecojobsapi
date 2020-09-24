const mongoose = require("mongoose");
const schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

const userSchema = new schema({
  usercode: String,
  name: String,
  email: String,
  password: String,
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

autoIncrement.initialize(mongoose);
userSchema.plugin(autoIncrement.plugin, {
  model: "users",
  field: "usercode",
  startAt: 1,
  incrementBy: 1,
});

module.exports = {
  userModel: mongoose.model("users", userSchema),
};
