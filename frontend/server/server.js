const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://dhruv07932_db_user:dhruv1234@cluster0.92fvzza.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req,res)=>{
    res.send("Velora Backend Running");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});