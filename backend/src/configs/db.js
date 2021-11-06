const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://soumya:SBZZiPCbV4kArLwC@cluster0.7lhmb.mongodb.net/meetUpClone?retryWrites=true&w=majority"
  );
};

module.exports = connect;
