const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const guestId = require("./model/guest");

const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(config.databaseURL, dbOptions).then(() => {

});

const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;

app.use(cors());


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

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;