import { users } from '@/util/db';

import { NextResponse } from "next/server";

export function GET(request, content) {
    const data = users;
    const userData = data.filter((item) => item.id == content.params.id)

    return NextResponse.json(
        userData.length == 0 ? { result: 'no data found', success: false } :{ result: userData,success:true })
    { status: 200 }
}

export async function PUT(request, content) {
    let payload = await request.json();

    payload.id = content.params.id;
    if (!payload.id || !payload.name || !payload.age || !payload.email) {
         return NextResponse.json({result:"request data is not found" , success:false},{status:400})
    }    

    return NextResponse.json({result:payload,success:true},{status:200})
}

export function DELETE(request,content) {
    let id = content.params.id
    if (id) {
        return NextResponse.json({result :"user deleted ",success:true},{status:200})
    }
    else {
        return NextResponse.json({result :"Internal error try again ",success:false},{status:400})
        
    }
    
    return 
}