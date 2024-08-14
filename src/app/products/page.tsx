import Link from "next/link";

'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Products() {
  const router = useRouter()
  return (
     <>
    <div className="flex grow justify-center">This is Products Page.</div>
    <div className="flex flex-col items-center">
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded' type="button" onClick={() => router.push('/products/mobiles')}>
      Mobiles
    </button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="button" onClick={() => router.push('/products/computers')}>
      Computers
    </button>
    </div>
    </>
  );
}