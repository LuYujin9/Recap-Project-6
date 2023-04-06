import mongoose from "mongoose";

const { Schema } = mongoose;
const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: String,
  mapURL: String,
  description: String,
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
