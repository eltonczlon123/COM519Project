const mongoose = require("mongoose");
const { Schema } = mongoose;

const idSchema = new Schema(
    {
        name: { type: Number, required: [true, 'Number is required'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("ID", idSchema);