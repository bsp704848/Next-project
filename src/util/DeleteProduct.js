"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props) {
    const router = useRouter();

    const deleteRecord = async() => {
        let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products` + props.id, {
            method: "DELETE"
        });
        response = await response.json();
        if (response.success) {
            alert("product deleted succcessfully");
            router.push("/products");

        }

    }
    
    return <button onClick={deleteRecord}>Delete</button>
} 