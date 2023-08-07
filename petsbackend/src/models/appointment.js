const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema(
  {
    date: { type: Date, require: true },
    hour: { type: String, require: true },
    type: { type: String, require: true },
    pet: {
      type: Schema.Types.ObjectId,
      ref: "pet",
      require: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("appointment", appointmentSchema);
