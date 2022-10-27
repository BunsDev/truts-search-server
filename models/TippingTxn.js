var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let TippingTxnScheam = new Schema(
  {
    review_id: String,
    dao_name: String,
    chain: String,
    tip_token_name: String,
    tip_token_address: String,
    from_address: String,
    to_address: String,
    value_inTokens: Number,
    value_inUSD: Number,
    tx_hash: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TippingTxn", TippingTxnScheam);
