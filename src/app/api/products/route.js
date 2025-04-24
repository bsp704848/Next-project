import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const data = await Product.find();
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.error("Error in GET /api/products:", error.message);
    return NextResponse.json({ result: [], success: false, message: error.message });
  }
}



export async function POST(request) {
    const payload = await request.json()
    await mongoose.connect(connectionStr);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result,success:true})
}
