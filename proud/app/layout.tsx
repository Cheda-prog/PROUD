"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

  
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: LayoutProps<"/">) {
    const route : AppRouterInstance  =  useRouter(); 
  useEffect(() => {

    const re = ( ) =>{Handleresize(route); }
  


    window.addEventListener("resize",  re)
    return () =>{
      window.removeEventListener("resize" , re);
    }
} , []);


  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

export function Handleresize (Router : AppRouterInstance ) 
{

    let size = window.innerWidth;
        console.log("Window is now " , size, "px wide")
    if(size <= 1024)
    {   
      Router.replace("/Mobile")
    }else {
      Router.replace("/Island")
    } 

}

