"use client"

import { useState } from "react"

export default function UploadImage() {
    const [file, setFile] = useState();
    const onSubmit = async (e)=>{
        e.preventDefault();
        console.log(file);
        const data = new FormData();
        data.set("file", file);
        let result = await fetch("api/upload", {
            method: "POST",
            body: data
        });
        result = await result.json();
        console.log(result);
        if (result.success) {
            alert("file successfully uploaded");
            
        }
        
    }

    return (

        <main>
            <h1>Upload image </h1>
            <form onSubmit={onSubmit}>
                <input
                    type="file"
                    name="file"
                    onChange={(e)=>setFile(e.target.files?.[0])}
                />
                <button type="submit">Upload image </button>

            </form>




        </main>
    )
}