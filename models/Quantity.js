const mongoose = require("mongoose");
const { Schema } = mongoose;

const quantitySchema = new Schema(
    {
        name: { type: Number, required: [true, 'Number is required'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Quantity", quantitySchema);