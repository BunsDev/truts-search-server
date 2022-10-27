var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let RateReview = new Schema(
  {
    review_id: String,
    wallet_address: String,
    rating: Boolean, //true = thumbs_up , false = thumbs_down
    chain: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RateReview", RateReview);
