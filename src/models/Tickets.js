import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URL)
mongoose.Promise = global.Promise

const TicketSchema = new Schema({
  title: String,
  description: String,
  
})