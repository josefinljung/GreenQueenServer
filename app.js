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

// booking

app.get("/dummyguest", async (req, res) => {

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

app.get("/bookings", async (req, res )=> {

    // funktion for att hamta alla

    const bookings = await booking.find();

    res.send(bookings);

})

app.get("/search", async (req,res)=> {

    const searchBooking = await booking.find()

    res.send(searchBooking)
})

//booking. find + filter 




app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;