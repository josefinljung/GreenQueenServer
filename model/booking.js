const moongoose = require("mongoose");

const schema = new moongoose.Schema({
    Id: Number,
    Date: Date,
    Time: Number,
    Amount: Number,
    Guest: [{
        guestId: {
            type: moongoose.Schema.Types.ObjectId,
            ref: "guest"
        }
    }]
});

const booking = moongoose.model("booking", schema);

module.exports = booking;

