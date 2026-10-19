import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (

    <div className="bg-black mib-h-screen text-cyan">
        <div> 



        <Link href="/Island" > Go to island </Link>
        <Link href="/Mobile" > Go to mobule </Link>
       </div>
    </div> 
  );
}
