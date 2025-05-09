import { users } from  '@/util/db';
import { NextResponse } from "next/server";

export function GET() {
    const data = users;
    return NextResponse.json(data,{status:200})
}

export async function POST(request) {

    let payload = await request.json()

    if (!payload.name || !payload.age || !payload.email) {

      return NextResponse.json({result:"require field not found ",success:false},{status:400})
    }

    return NextResponse.json({result:"success",success:true})
}