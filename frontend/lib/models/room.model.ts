import { Schema, model, models } from "mongoose";

const RoomSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }], // Mảng chứa URL ảnh từ UploadThing
  amenities: [{ type: String }], // Tiện nghi: Wifi, TV, Bath...
  type: { type: String, default: "Standard" }, // Loại phòng
  isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

const Room = models.Room || model("Room", RoomSchema);
export default Room;