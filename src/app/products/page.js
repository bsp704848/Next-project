import DeleteProduct from "@/util/DeleteProduct";
import Link from "next/link";

const getProducts = async () => {
  try {
      const res = await fetch("http://localhost:3000/api/products", {
          cache:"no-cache"
      }
    );
    const data = await res.json();
    if (data.success) {
      return data.result;
    } else {
      console.error("API Error:", data.message || "Unknown error");
      return [];
    }
  } catch (error) {
    console.error("Fetch Error:", error.message);
    return [];
  }
};


export default async function Page() {
    const products = await getProducts();
    console.log("Fetched products:", products); 

    return (
        <div>
            <Link href={'/addproduct'}>Add products</Link>
            <h1>Product list</h1>
            <table className="table-auto border border-black">
                <thead>
                    <tr>
                        <td className="border border-black px-4 py-2">Name</td>
                        <td className="border border-black px-4 py-2">Price</td>
                        <td className="border border-black px-4 py-2">Color</td>
                        <td className="border border-black px-4 py-2">Company</td>
                        <td className="border border-black px-4 py-2">Category</td>
                        <td className="border border-black px-4 py-2">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, id) => (
                        <tr key={id}>
                            <td className="border border-black px-4 py-2">{item.name}</td>
                            <td className="border border-black px-4 py-2">{item.price}</td>
                            <td className="border border-black px-4 py-2">{item.color}</td>
                            <td className="border border-black px-4 py-2">{item.company}</td>
                            <td className="border border-black px-4 py-2">{item.category}</td>
                            <td className="border border-black px-4 py-2"><Link href={"/products/" + item._id}>Edit</Link> <DeleteProduct id={item._id} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
