const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const guestId = require("./model/guest");
const booking = require("./model/booking");
const bodyParser = require("body-parser");

const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(config.databaseURL, dbOptions).then(() => {

});

    const cors = require("cors");
    const app = express();

    const port = process.env.PORT || 8000;

    app.use(cors());
    app.use(bodyParser.json());


// Search for booking


    app.get("/search",  async (req,res)=> {

        const searchBooking = await booking.find({
            time : req.query.Time,
            date : req.query.Date
        })

        res.send(searchBooking)
        console.log(searchBooking);
    })


// Create new booking


    app.get("/createbooking", async (req, res) => {

        console.log(req.body);

        const guest = await booking.findOne();
        console.log(guest);
        
        const objectdatasomskullekommafromdatabase =  new booking ({
            Id: 12,
            Date: 14/5/20,
            Time: 18.00,
            Amount: 6,
            Table: 1,  // increment here 
            GuestId: 12
        })

        await objectdatasomskullekommafromdatabase.save((error, success) =>{
            if (error){
                res.send(error.message)
            }
        })
        res.send(objectdatasomskullekommafromdatabase)

    })


// Get bookings from create (get) -> post booking to database

    app.get("/bookings", async (req, res )=> {

        //query string 
        //query
        // req.query.time
        // funktion for att hamta alla

        const bookings = await booking.find();

        res.send(bookings);

    })

//booking. find + filter 


app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;