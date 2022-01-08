const mongoose = require("mongoose");
const { Schema } = mongoose;

const food_itemsSchema = new Schema(
    {
        name: { type: String, required: [true, 'Name is required'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Food_items", food_itemsSchema);