import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "MongoDB Connected Successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to connect to MongoDB" }, { status: 500 });
  }
}
