const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    dateAndTime: { type: String, required: true },
    title: { type: String, required: true },
    hostedBy: { type: String, required: true },
    hostAvatar: { type: String, required: true },
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
        avatarImg: { type: String, required: true },
        avatarName: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("event", ProductSchema);
