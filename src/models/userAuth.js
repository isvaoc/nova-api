const { Schema, model } = require("mongoose");
const UserAuth = new Schema(
  {
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("UserAuth", UserAuth);
