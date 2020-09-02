const moongoose = require("mongoose");

const schema = new moongoose.Schema({
    Id: Number,
    FirstName: String,
    LastName: String,
    Email: String,
    Phone: String
});

const guestId = moongoose.model("guest", schema);

module.exports = guestId;

