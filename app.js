const express = require("express");

const cors = require("cors");


const app = express();

app.use(cors());


app.get("/dummybookings", (req, res)=>{

    const objectdatasomskullekommafromdatabase= {
        name:"louise",
        adress:"nnn"
    }

    res.send(objectdatasomskullekommafromdatabase)


})


app.listen("8000", ()=>{
    console.log("hello")
})