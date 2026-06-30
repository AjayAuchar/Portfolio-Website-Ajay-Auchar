const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // address: {
  //   type: String,
  //   required: true,
  // },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userdatas", user_schema);
