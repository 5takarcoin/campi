"use client";

import DropDown from "@/components/DropDown";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";

export default function Home() {
  const [openSelected, setOpenSelected] = useState(false);
  const kcval = ["Shadak", "Marteen", "Avej", "Mr Fallin", "Suygetsu"]

  return <div className="mx-4 p-4 h-full flex flex-col justify-between">
    {openSelected && (
        <div
          onClick={() => setOpenSelected(false)}
          className="fixed z-50 inset-0 bg-black/50 flex flex-col items-center justify-center gap-2"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" px-8 pt-8 pb-4 w-[400px] md:w-[600px] lg:w-[900px] bg-white  rounded-lg flex flex-col gap-4"
          >
            <p className="text-foreground text-center">
              Contacts selected
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {kcval.map((val) => (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                  <HiMenuAlt4 className="text-foreground/70 text-2xl" />
                  <div key={val}>
                  <p className="flex items-center gap-2"><span>{val}</span><span className="text-xs text-foreground/70">Company name</span></p>
                  <p className="text-xs text-foreground/70">leoleo@gmail.com</p>
                </div>
                </div>
                <IoClose className="cursor-pointer text-foreground/70 text-2xl font-bold" />
                </div>
              ))}
            </div>

            <div className="text-end">
              <button className="bg-button text-white m-1 rounded-md px-4 py-1 text-md">
                Modify
              </button>
              <button
                onClick={() => setOpenSelected(false)}
                className="bg-foreground  text-white m-1 rounded-md px-4 py-1 text-md"
              >
                Continue
              </button>
            </div>
          </div>
          <div
            // onClick={(e) => e.stopPropagation()}
            className="h-12 w-12 bg-white flex items-center justify-center rounded-full p-2"
          >
            {/* <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.62 13.1493C35.4011 13.9304 35.4011 15.1967 34.62 15.9778L28.4156 22.1822L34.62 28.3866C35.4011 29.1677 35.4011 30.434 34.62 31.2151L31.215 34.6201C30.4339 35.401 29.1676 35.4011 28.3866 34.6201L22.1821 28.4156L15.9777 34.6201C15.1966 35.401 13.9303 35.4011 13.1493 34.6201L9.74423 31.2151C8.96352 30.434 8.9634 29.1676 9.74423 28.3866L15.9487 22.1822L9.74423 15.9778C8.96345 15.1967 8.96336 13.9303 9.74423 13.1493L13.1493 9.7443C13.9302 8.96333 15.1966 8.96349 15.9777 9.7443L22.1821 15.9487L28.3866 9.7443C29.1675 8.96335 30.4339 8.96356 31.215 9.7443L34.62 13.1493Z"
                fill="#1B222C"
              />
            </svg> */}
            <IoClose className="cursor-pointer text-foreground text-2xl font-bold" />
          </div>
        </div>
      )}
  <div>
  <div className="flex justify-between items-start">
    <div>
      <h2 className="text-2xl flex gap-2 items-center">
        Start a Campaign
      </h2>
    <h3 className="mb-8 text-xl">Stage 1/3</h3>
    </div>
    <div className="flex gap-2">
      <button className="flex border-foreground border-2 rounded-lg px-4 gap-1 items-center hover:text-white hover:bg-foreground transition-all"><span>Create List</span><FaPlus className="text-xs" /></button>
      <button className="flex border-foreground border-2 rounded-lg px-4 gap-1 items-center hover:text-white hover:bg-foreground transition-all"><span>Add New Contacts</span><TiUserAdd className="text-" /></button>
    </div>
  </div>

  <h3 className="mb-4 text-xl">Select contact from</h3>
  {/* Dropdown */}
  <DropDown title="Leads" options={["Leads", "Contacts", "Favourites"]} />

  


  {/* spacer */}
  <div className="h-8"></div>

  <h3 className=" text-xl">Select contact</h3>
  {/* Dropdown */}

  <div className="flex gap-1 text-sm my-4">
  {kcval.map((val) => (
      <span onClick={() => setOpenSelected(true)} className="rounded-lg cursor-pointer flex items-center gap-1 bg-foreground hover:bg-foreground/70 text-white pl-2 p-1 group transition-all duration-200" key={val}>
        <span>{val}</span>
        <IoClose className="text-lg text-white opacity-0 group-hover:opacity-100 w-0 group-hover:w-5 overflow-hidden transition-all duration-200" />
      </span>
  ))}
  </div>
  <DropDown title="Leads" options={kcval} />
  </div>
  
  <div className="flex justify-end gap-4">
    <button className="text-foreground/70 hover:text-foreground transition-all">
      Select contacts to proceed
    </button>
  <Link href="/campaign/2" className="bg-foreground text-white rounded-lg pl-4 p-2 flex items-center gap-2 group cursor-pointer transition-all duration-200">
    <span>Next</span>
    <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 w-0 group-hover:w-5 overflow-hidden transition-all duration-200" />
  </Link>
  </div>

  </div>;
}
