"use client"
export default function DeleteUser(props) {
    const userId = props.id;
    const deleteuser = async()=> {
        let result = await fetch("http://localhost:3000/api/users/" + userId, {
            method: "delete"
        });
        result = await result.json();
        if (result.success) {
            alert("user is deleted ")
        }

        
}
    return <button onClick={(deleteuser)}>Delete</button>
}