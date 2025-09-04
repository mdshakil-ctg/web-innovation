// Fix: Make this file a valid Next.js API route module
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mogodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const logos = await db.collection("logos").find({}).toArray();
    return NextResponse.json({ logos });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch logos" }, { status: 500 });
  }
}
