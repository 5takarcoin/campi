import DropDown from "@/components/DropDown";
import Link from "next/link";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";

export default function Home() {

  const kcval = ["Shadak", "Marteen", "Avej", "Mr Fallin", "Suygetsu"]
  const tags = ["Casual", "Marketing", "Seasonal"]

  return <div className="mx-4 p-4 h-full flex flex-col justify-between">
    
  <div>
  <div className="flex justify-between items-start">
    <div>
      <h2 className="text-2xl flex gap-2 items-center">
        Start a Campaign
      </h2>
    <h3 className="mb-8 text-xl">Stage 2/3</h3>
    </div>
    <div className="flex gap-2">
      <button className="flex border-foreground border-2 rounded-lg px-4 gap-1 items-center hover:text-white hover:bg-foreground transition-all"><span>Create List</span><FaPlus className="text-xs" /></button>
      <button className="flex border-foreground border-2 rounded-lg px-4 gap-1 items-center hover:text-white hover:bg-foreground transition-all"><span>Add New Contacts</span><TiUserAdd className="text-" /></button>
    </div>
  </div>

  <h3 className=" text-xl mb-4">Tell us about the Campaign</h3>

  <textarea name="" id="" placeholder="Type to describe" className="w-full border px-4 py-2 rounded-lg border-foreground"></textarea>

  <h3 className=" text-xl">Add Campaign Tag</h3>
  {/* Dropdown */}

  <div className="flex gap-1 text-sm my-4">
  {tags.map((val) => (
      <span className="rounded-lg cursor-pointer flex items-center gap-1 bg-foreground hover:bg-foreground/70 text-white pl-2 p-1 group transition-all duration-200" key={val}>
        <span>{val}</span>
        <IoClose className="text-lg text-white opacity-0 group-hover:opacity-100 w-0 group-hover:w-5 overflow-hidden transition-all duration-200" />
      </span>
  ))}
  </div>
  <DropDown title="Leads" options={["Exclusive", "Lead generation", "Confirmation", "Follow-up"]} />

  


  {/* spacer */}
  <div className="h-8"></div>

  <h3 className=" text-xl">Add Persona</h3>
  {/* Dropdown */}

  <div className="flex gap-1 text-sm my-4">
  {kcval.map((val) => (
      <span className="rounded-lg cursor-pointer flex items-center gap-1 bg-foreground hover:bg-foreground/70 text-white pl-2 p-1 group transition-all duration-200" key={val}>
        <span>{val}</span>
        <IoClose className="text-lg text-white opacity-0 group-hover:opacity-100 w-0 group-hover:w-5 overflow-hidden transition-all duration-200" />
      </span>
  ))}
  </div>
  <DropDown title="Leads" options={kcval} />
  </div>
  
  <div className="flex justify-end gap-4">
    <button className="text-foreground/70 hover:text-foreground transition-all">
      Select type to proceed
    </button>
  <Link href="/campaign/3" className="bg-foreground text-white rounded-lg pl-4 p-2 flex items-center gap-2 group cursor-pointer transition-all duration-200">
    <span>Next</span>
    <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 w-0 group-hover:w-5 overflow-hidden transition-all duration-200" />
  </Link>
  </div>

  </div>;
}
