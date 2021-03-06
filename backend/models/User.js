import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
      type: Boolean,
      required: true
  }
});
const User = mongoose.model("users", UserSchema);
export default (User);