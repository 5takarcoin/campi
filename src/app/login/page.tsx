"use client";

import Image from "next/image"
import { useState, useEffect } from "react"

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex gap-4">
          <Image src="/logobig.svg" alt="Logo" width={84} height={84}></Image>
          <h3 className="text-[80px]">Campi</h3>
        </div>

        <div className={`flex flex-col mt-8 gap-2 w-full max-w-[400px] transition-opacity duration-500 h-0 ${isVisible ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
          <h3 className="text-xl pl-4">Login</h3>
          <input type="email" placeholder="Email" className="w-full border border-foreground rounded-md px-4 py-2" />

          <h3 className="text-xl pl-4">Password</h3>
          <input type="password" placeholder="Password" className="w-full border border-foreground rounded-md px-4 py-2" />
          <button className="bg-foreground mt-4 text-white rounded-md px-4 py-2">Login</button>

        </div>
    </div>
  )
}

export default Page