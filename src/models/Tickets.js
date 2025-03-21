import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const TicketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    progress: Number,
    priority: Number,
    status: String,
    active: Boolean,
  },
  { timestamps: true }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);
export default Ticket;
