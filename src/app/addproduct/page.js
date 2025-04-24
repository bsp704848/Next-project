"use client";

import { useState } from "react";



export default function Page() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");

    const addProduct = async() => {
        console.log(name,price,color,company,category);
        let result = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({name, price, color, company, category})
        });
        result = await result.json();
        if (result.success) {
            alert("new product added");

            setName("");
            setPrice("");
            setColor("");
            setCompany("");
            setCategory("");
            
        }
    }
    

    return (
        <div >
            <div className="flex flex-col gap-y-8 min-h-screen justify-center items-center">
            <h1 className="font-extrabold" style={{fontFamily:'roboto', fontSize:30}}>Add new Product</h1>
                <input
                    className=" hover:bg-amber-50 hover:border-1 rounded p-2 font-bold border-2"
                    type="text"
                    placeholder="Enter Product Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    className=" hover:bg-amber-50 hover:border-1 rounded p-2 font-bold  border-2"
                    type="text"
                    placeholder="Enter Product Price"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
                <input
                    className=" hover:bg-amber-50  font-bold hover:border-1 rounded p-2 border-2"
                    type="text"
                    placeholder="Enter Product color"
                    value={color}
                    onChange={(e)=>setColor(e.target.value)}
                />
                <input
                    className=" hover:bg-amber-50 font-bold hover:border-1 rounded p-2 border-2"
                    type="text"
                    placeholder="Enter Product company"
                    value={company}
                    onChange={(e)=>setCompany(e.target.value)}
                />
                <input
                    className=" hover:bg-amber-50 font-bold hover:border-1 rounded p-2 border-2"
                    type="text"
                    placeholder="Enter Product category"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                />
                <button
                    onClick={addProduct}
                    className="hover:p-1.5 p-2 rounded-2xl bg-amber-500 font-bold w-35 "
                    type="submmit">
                    Add
                </button>
                </div>
        </div>
    )
}