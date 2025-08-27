// app/api/users/route.ts
import clientPromise from "@/lib/mogodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { uid, name, email, provider } = body;

     if (!uid || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db("webinnovation"); // change to your db name
    const usersCollection = db.collection("users");

    // Check if already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

     // Insert new user
    const newUser = await usersCollection.insertOne({
      uid,
      name,
      email,
      provider,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "User created", user: newUser });

  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
