"use client";

import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [age, setAge] = useState("");
    
const addUser = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, age, email })
    });

    response = await response.json();
    console.log("API response:", response);

    if (response.success) {
        alert("new user created");
    } else {
        alert("try again");
    }
};


    return (
        <div >
            <div className="flex flex-col gap-y-8 min-h-screen justify-center items-center bg-cyan-50">
            <h1 className="font-extrabold" style={{fontFamily:'roboto', fontSize:30}}>Add new user</h1>
                <input className=" hover:bg-amber-50 hover:border-2 rounded p-2 font-bold " value={name} type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
                <input className=" hover:bg-amber-50 hover:border-2 rounded p-2 font-bold " value={age} type="text" placeholder="Enter your Age" onChange={(e) => setAge(e.target.value)} />
                <input className=" hover:bg-amber-50 font-bold hover:border-2 rounded p-2" value={email} type="text" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={addUser} className="p-2 rounded bg-amber-500 font-bold"  type="submmit">Submit</button>
                </div>
        </div>
    )
}