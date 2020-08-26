const moongoose = require("mongoose");

const schema = new moongoose.Schema({
    Id: Number,
    Date: Date,
    Time: Number,
    Amount: Number,
    GuestId: Number
});

const booking = moongoose.model("booking", schema);

module.exports = booking;

