import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, default: "", required: true },
  authorId: { type: String, require: true },
});

export default mongoose.model("Book", bookSchema);
