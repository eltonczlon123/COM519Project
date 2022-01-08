const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin123:admin123@cluster0.vgxbw.mongodb.net/stock?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

module.exports = mongoose;
