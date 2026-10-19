import Image from "next/image";
import me from "@/app/assets/Screenshot 2025-02-25 202230.png"


export default function Island() {
    

    // text that says Hey my name is Alexander Cheda
    // but I go by my last name Chdea 
    // picture of me to the right 

    return <div className="bg-[url('/islandpic.jpg')] bg-cover bg-center min-h-screen">
        <Image src={me} alt="Alex Cheda" />
        <h1> Hi my name is Cheda and I'm always learning something new</h1>

        
    </div>
}