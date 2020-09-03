const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const Guest = require("./model/guest");
const Booking = require("./model/booking");
const bodyParser = require("body-parser");

const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(config.databaseURL, dbOptions).then(() => {

});

    const cors = require("cors");
const booking = require("./model/booking");
    const app = express();

    const port = process.env.PORT || 8000;

    app.use(cors());
    app.use(bodyParser.json());


// Search for booking


    app.get("/search",  async (req,res)=> {
        console.log(req.query)
        const searchBooking = await Booking.find({
            Date : req.query.date,
            Time: req.query.time
        })
console.log(searchBooking)
        res.send(searchBooking)
        console.log("söker på bokningar");
    })


// Create new booking


    app.post("/createbooking", async (req, res) => {
        console.log(req.body);
        const bookingnumber = await Booking.find().count()
        const guest = await Guest.findOne({Email: req.body.email});
        console.log("hittar användare")

        if (bookingnumber.length > 15) res.send("fully booked")
        if(!guest){
            let newGuest = new Guest ({
                FirstName: req.body.fname,
                LastName: req.body.lname,
                Email: req.body.email,
                Phone: req.body.phone
            });
            await newGuest.save();
             console.log("ny användare", newGuest);
                let newBooking = new Booking ({
                    Id: req.body.id,
                    Date: req.body.date,
                    Time: req.body.time,
                    NumberOfGuests: req.body.numberOfGuests,
                    GuestId: newGuest._id,
                });
                await newBooking.save();
                res.send(newBooking+ newGuest)
        }
        else{
           let newBooking = new Booking ({
            Date: req.body.date,
            Time: req.body.time,
            NumberOfGuests: req.body.numberOfGuests,
            GuestId: guest._id,
            });
            await newBooking.save();
                res.send(newBooking)
        }
        console.log(req.body.guestId)
    })


// Get bookings from create (get) -> post booking to database

    app.get("/bookings", async (req, res )=> {

        const bookings = await booking.find();

        res.send(bookings);

    })

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;