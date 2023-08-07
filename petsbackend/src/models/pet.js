const { Schema, model } = require("mongoose");

const petSchema = new Schema(
  {
    name: { type: String, required: true },
    race: { type: String, required: true },
    age: { type: String, required: true },
    size: { type: String, required: true },
    appointments: [
      {
        type: Schema.Types.ObjectId,
        ref: "appointment",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("pet", petSchema);
