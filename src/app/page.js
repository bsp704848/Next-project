import Image from "next/image";
import Link from "next/link";
import { Sigmar } from 'next/font/google'


const sigmar = Sigmar({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className="bg-amber-200">
    <div className="flex gap-x-4">
        <Link className="font-bold" href={"/addproduct"}>Add products</Link>
        <Link className="font-bold" href={"/products"}>Products list</Link>
        
      </div>
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
          <h1 className={sigmar.className} style={{fontSize:50}}>Welcome to Next JS</h1>
      </main>
      
    </div>
      </div>
      );
}
