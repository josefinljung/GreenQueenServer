const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const guestId = require("./model/guest");
const bookingId = require("./model/booking");

const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(config.databaseURL, dbOptions).then(() => {

});

const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());


// guest 

app.get("/dummybookings", async (req, res) => {

    const objectdatasomskullekommafromdatabase =  new guestId ({

        Id: 12,
        FirstName: "Louise",
        LastName: "Dennevi",
        Email: "dennevilouise@gmail.com",
        Phone: 076123456
    })

    await objectdatasomskullekommafromdatabase.save((error, success) =>{
        if (error){
            res.send(error.message)
        }
    })

    res.send(objectdatasomskullekommafromdatabase)

})

// booking

app.get("/dummyguest", async (req, res) => {

    const objectdatasomskullekommafromdatabase =  new bookingId ({

        Id: 12,
        Date: 14/5/20,
        Time: 18.00,
        Amount: 6,
        GuestId: 4
    })

    await objectdatasomskullekommafromdatabase.save((error, success) =>{
        if (error){
            res.send(error.message)
        }
    })

    res.send(objectdatasomskullekommafromdatabase)

})

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;