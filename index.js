const express = require('express');
const path = require("path")
require("./seeder");
const mongoose = require('mongoose');
const nodemon = require('nodemon')
const port = process.env.PORT || 8080;
const foodItems = require('./models/FoodItems');
const foodQuantity = require('./models/Quantity');
const app = express();
app.use(express.json())
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
const staticpath = path.join(__dirname, "views");
app.use('/js', express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use('/css', express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use('/jq', express.static(path.join(__dirname, "/node_modules/jquery/dist")));
app.use('/vendor', express.static(path.join(__dirname, "/bootstrap-4.0.0/assets/js/vendor")));
app.use('/pricing', express.static(path.join(__dirname, "/bootstrap-4.0.0/docs/4.0/examples/pricing")));
app.use(express.static(staticpath))

app.get("/", (req, res) => {
    res.send("Check server is running");
});

app.get("/recipes", async (req, res) => {
    try {
        const foodStock = await foodItems.find();
        res.status(200).json({
            status: 'success',
            results: foodStock.length,
            data: { foodStock }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
});

app.put("/recipes", async (req, res) => {
    try {
        const foodStock = await foodItems.findByIdAndUpdate({_id:req.body._id}, {$inc:{quantity:req.body.val}}, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {foodStock}
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
});

app.listen(port, () => {
    console.log('Running at port 8080');
});


