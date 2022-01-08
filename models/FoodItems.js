const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodItemsSchema = new Schema(
    {
        name: { type: String, required: [true, 'Name is required'] },
        quantity: { type: Number },
    },
    { timestamps: true }
);

module.exports = mongoose.model("FoodItems", foodItemsSchema);
