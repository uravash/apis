const express = require("express");
//db connection
require("../src/mongo/conn");
//model Schema
const Mensraking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

//send the data mongodb
app.post("/mens", async (req, res) => {
  try {
    const addingmensRecord = new Mensraking(req.body);
    console.log(req.body);
    const insertMens = await addingmensRecord.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});
//recive/get the  data mongodb
app.get("/mens", async (req, res) => {
  try {
    const getMens = await Mensraking.find({}).sort({"raking":1});
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});


//recive/get the one data mongodb
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await Mensraking.findById(_id);
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

//update the data mongodb
app.get("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getMn = await Mensraking.findByIdAndUpdate(_id,req.body,{
          new:true
      });
      res.send(getMn);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  //delete the data mongodb
  app.get("/mens/:id", async (req, res) => {
    try {
      
      const getMn = await Mensraking.findByIdAndDelete(req.params.id);
      res.send(getMn);
    } catch (e) {
      res.status(500).send(e);
    }
  });
app.listen(port, () => {
  console.log(`running port ${port}`);
});
