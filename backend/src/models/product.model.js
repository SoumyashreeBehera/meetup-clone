const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    dateAndTime: { type: String, required: true },
    title: { type: String, required: true },
    // hostedBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "user",
    //   required: true,
    // },
    eventImage: { type: String },
    eventType: { type: String, required: true }, //group or event
    eventCatagory: { type: String, required: true }, //catagory like art & culture
    details: [{ type: String, required: true }],
    groupDetail: {
      groupName: { type: String, required: true },
      groupPrivate: { type: String, required: true },
    },
    eventLocationType: { type: String, required: true }, //online or in person
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("event", ProductSchema);
// 618c863f19da5468323f186b
