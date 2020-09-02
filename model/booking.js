const moongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const schema = new moongoose.Schema({
    Id: Number,
    Date: Date,
    Time: String,
    NumberOfGuests: Number,
    GuestId:{ type: moongoose.Schema.Types.ObjectId,
    ref: "guest"}
});

const booking = moongoose.model("booking", schema);

module.exports = booking;

