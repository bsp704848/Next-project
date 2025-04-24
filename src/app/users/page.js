export const dynamic = "force-dynamic";

import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";

async function getUsers() {
    let data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);
    data = await data.json();
    return data;
}

export default async function Page({params}) {
    const users = await getUsers();
 
    return (
        <div>
            <h1>user List</h1>
            {
                users.map((item,id) => (
                    <div key={id} className="flex gap-x-4">
                        <span><Link href={`users/${item.id}`}>{item.name}</Link></span>
                        <span><Link href={`users/${item.id}`}>Edit</Link></span>
                        <DeleteUser id={item.id} />
                    </div>
                ))
            }
        </div>
    )
    
}