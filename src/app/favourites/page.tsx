"use client";

import { AiFillEdit } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";

const favourites = [
  { name: "John Doe", company_name: "Fnatic", last_modified: "03 Sept", running_campaigns: 10 },
  { name: "Jane Smith", company_name: "Fnatic", last_modified: "03 Sept", running_campaigns: 15 },
  { name: "Jim Beam", company_name: "Fnatic", last_modified: "03 Sept", running_campaigns: 20 },
];

const Page = () => {

  return (
    <div className="mx-4 p-4 h-full flex flex-col">
    
      <h2 className="text-2xl mb-8">Favourite list</h2>

      <div className="flex-1 overflow-auto">
        <div className="w-full text-foreground">
          {/* Header Row */}
          <div className="flex mb-4">
            <div className="flex-4">
              List Name
            </div>
            <div className="flex justify-center flex-1">
              Company Name
            </div>
           
            <div className="flex justify-center flex-1">
              Last Modified
            </div>
            <div className="flex justify-center flex-1">
              Running Campaigns
            </div>
            <div className="flex justify-center flex-1 p-2">
            </div>
          </div>
          
          {/* Data Rows */}
          {favourites.map((favourite) => (
              <div key={favourite.name} className="flex hover:bg-gray-50 text-foreground">
              <div className=" flex-4 gap-1 flex items-center whitespace-nowrap text-sm font-medium text-gray-900">
               <span>{favourite.name}</span>
              </div>
              <div className="flex justify-center text-foreground/70 flex-1 whitespace-nowrap text-sm">
                {favourite.company_name}
              </div>
             
              <div className="flex justify-center text-foreground/70 flex-1 whitespace-nowrap text-sm">
                {favourite.last_modified}
              </div>
              <div className="flex justify-center text-foreground/70 flex-1 whitespace-nowrap text-sm font-medium">
                {favourite.running_campaigns}
              </div>
              
              <div className="flex justify-center text-foreground gap-1 flex-1 p-2 whitespace-nowrap text-sm font-medium">
                <button className="">
                <IoMdHeart className=""/>
                </button>
                <button className="">
                <AiFillEdit />
                </button>
                <button className="">
                <TiUserAdd className=""/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Page;
