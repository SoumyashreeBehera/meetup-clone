const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const path = require("path");
// const x= path.join(__dirname);
const y = path.resolve("src", "images", "profileimg.png");
// console.log(x,y)

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String },
    interest: { type: Array, default: [] },
    profile_pic: { type: String, default: y },
    // events:[{type: Schema.Types.ObjectId, ref: 'Ingredient'}]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//it will bycript the password when user register and update
// it happns before the user get saved
// next is the middleware and pre is the hook

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);
module.exports = User;

// username:
// email:
// password:
// intrest:
// location:
// events:{type:Array,defult[]};
// groups:[]
