import mongoose from "mongoose";
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: { type: String, default: "", required: true },
  age: { type: Number, default: 0 },
  books: { type: Array, default: [] },
});

export default mongoose.model("Author", AuthorSchema);
