import Ticket from "@/models/Tickets";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const record = await Ticket.find({title: "Mkuu"});
    return NextResponse.json({
      record,
      message: "MongoDB Connected Successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
}
