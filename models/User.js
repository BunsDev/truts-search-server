var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    dicordId: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    guilds: {
      type: String,
    },
    public_address: {
      type: String,
    },
    profile_img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
module.exports = mongoose.model("User", UserSchema);
