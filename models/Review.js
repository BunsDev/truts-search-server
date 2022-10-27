var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let ReviewScheam = new Schema(
  {
    rating: String,
    review_desc: String,
    resonate_vibes_rate: Number,
    onboarding_exp: Number,
    opinions_matter: Number,
    great_org_structure: Number,
    friend_recommend: Number,
    great_incentives: Number,
    user_discord_id: String,
    dao_name: String,
    guild_id: String,
    public_address: String,
    thumbs_up: { type: Number, default: 0 },
    thumbs_down: { type: Number, default: 0 },
    authorized: { type: Boolean, default: false },
    chain: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewScheam);
