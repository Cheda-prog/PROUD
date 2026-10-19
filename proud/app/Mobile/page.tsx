"use client"
import Image from "next/image";
import me from "@/app/assets/Screenshot 2025-02-25 202230.png"
import { useState } from "react";


export default function Mobile() {
    let [toggle , Settoggle] = useState<string | null>(null);

    // text that says Hey my name is Alexander Cheda
    // but I go by my last name Chdea 
    // picture of me to the right 

    return <div className="bg-black text-white">

        <Image src={me} alt="Alex Cheda" />
        <h1> Hi my name is Cheda and I'm always learning something new</h1>

        <div>
            
            <button className="bg-indigo-900 p-6 rounded-2xl"  onClick={() => Settoggle("AboutMe")}>
           
            </button> 

            <button className="bg-indigo-900 p-6 rounded-2xl" onClick={() => Settoggle("Education")}> 

            </button>

            <button className="bg-indigo-900 p-6 rounded-2xl" onClick={() => Settoggle("Learning")}> 
               
            </button>


            {/* 
                This will be the modal the displays all the information and can have the same effect for each. 
            */}
            <div >
            {toggle === "AboutMe" && (
            <div>
            <h2> About me</h2>
            <h3>Alexander Carlos Cheda                         but most people just call me cheda</h3>
            <h3>I've coding since a junior in Highschool. When I first started coding I hated the hard and tedious nature of it and felt like making anything was imposibly hard. Four years later I still think the same way but i've grown to love it.</h3>
            </div>
            )}

            
            {toggle === "Education"  && (
            <div >
            <h1> Education </h1>
            <h3> UNLV - bachelors of Computer Science  Expected 2026<br />GPA 3.4 </h3>
            </div>
            )}

            {toggle === "Learning" && (
                <div>
                 <h1> TypeScript </h1>
                <Image src="/book.png" alt="Eloquent Type Scipt the book" width={200} height={300}/> 
                </div>
            )}


            </div>
        </div>
    </div>
}