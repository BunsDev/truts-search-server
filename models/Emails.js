var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let EmailSchema = new Schema(
    {
        email: String
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Email", EmailSchema);
