
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { RiSaveFill } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";

export default function Home() {

  const days = {
    day1: [
      "Introduction & Storytelling",
      `Subject: "Leo, your fabric tells stories. Let’s make the world listen."`,
      "Goal: Introduce the brand, highlight uniqueness, and connect emotionally."
    ],
    day2: [
      "Introduction & Storytelling",
      `Subject: "Leo, your fabric tells stories. Let’s make the world listen."`,
      "Goal: Introduce the brand, highlight uniqueness, and connect emotionally."
    ],
    day3: [
      "Introduction & Storytelling",
      `Subject: "Leo, your fabric tells stories. Let’s make the world listen."`,
      "Goal: Introduce the brand, highlight uniqueness, and connect emotionally."
    ]
  }


  return <div className="mx-4 p-4 h-full flex flex-col justify-between">
    
  <div>
  <div className="flex justify-between items-start">
    <div>
      <h2 className="text-2xl flex gap-2 items-center">
        Start a Campaign
      </h2>
    <h3 className="mb-8 text-xl">Stage 3/3</h3>
    </div>
    <div className="flex gap-2">
      <button className="flex border-foreground border-2 rounded-lg px-4 gap-1 items-center hover:text-white hover:bg-foreground transition-all"><span>Create List</span><FaPlus className="text-xs" /></button>
      <button className="flex border-foreground border-2 rounded-lg px-4 gap-1 items-center hover:text-white hover:bg-foreground transition-all"><span>Add New Contacts</span><TiUserAdd className="text-" /></button>
    </div>
  </div>

  <h3 className=" text-xl mb-4">Setup a campaign plan</h3>

  <div className="grid grid-cols-3 gap-4 mb-8">
    {Object.entries(days).map(([dayKey], dayIndex) => (
      <div key={dayKey} className="bg-button/10 hover:bg-button/20 cursor-pointer rounded-xl p-2 flex flex-col h-full">
        <h4 className="text-xl font-semibold text-center">Day {dayIndex + 1}</h4>
      </div>
    ))}
    {Object.entries(days).map(([dayKey, dayData]) => (
      <div key={`${dayKey}-content`} className="bg-button/10 hover:bg-button/20 cursor-pointer rounded-xl p-4 flex flex-col h-full text-center">
        <p className="">{dayData[0]}</p>
      </div>
    ))}
  
   
    {Object.entries(days).map(([dayKey, dayData]) => (
      <div key={`${dayKey}-subject`} className="bg-button/10 hover:bg-button/20 cursor-pointer rounded-xl p-4 flex flex-col h-full">
        <p className="">{dayData[1]}</p>
      </div>
    ))}
    {Object.entries(days).map(([dayKey, dayData]) => (
      <div key={`${dayKey}-goal`} className="bg-button/10 hover:bg-button/20 cursor-pointer rounded-xl p-4 flex flex-col h-full">
        <p className="">{dayData[2]}</p>
      </div>
    ))}
    {Object.entries(days).map(([dayKey], dayIndex) => (
      <div key={`${dayKey}-${dayIndex}-actions`} className="flex gap-2 justify-end">
        <button className="flex items-center gap-1 bg-button/10 hover:bg-button/20 cursor-pointer rounded-lg px-2 py-1"><span>Modify</span><AiFillEdit /></button>
        <button className="flex items-center gap-1 bg-button/10 hover:bg-button/20 cursor-pointer rounded-lg px-2 py-1"><span>Save</span><RiSaveFill /></button>
      </div>
    ))}
  </div>
    

  </div>
  <div className="flex justify-end gap-4">
    <button className="text-foreground/70 hover:text-foreground transition-all">
      Select type to proceed
    </button>
  <Link href="/campaign" className="bg-foreground text-white rounded-lg pl-4 p-2 flex items-center gap-2 group cursor-pointer transition-all duration-200">
    <span>Next</span>
    <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 w-0 group-hover:w-5 overflow-hidden transition-all duration-200" />
  </Link>
  </div>
  </div>;
}
