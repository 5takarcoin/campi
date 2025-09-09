"use client";

import { AiFillEdit } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";

const contacts = [
  { name: "John Doe", contacts: 100, favt_contacts: 50, last_modified: "03 Sept", running_campaigns: 10 },
  { name: "Jane Smith", contacts: 150, favt_contacts: 75, last_modified: "03 Sept", running_campaigns: 15 },
  { name: "Jim Beam", contacts: 200, favt_contacts: 100, last_modified: "03 Sept", running_campaigns: 20 },
];

const Page = () => {

  return (
    <div className="mx-4 p-4 h-full flex flex-col">
    
      <h2 className="text-2xl mb-8">Contact list</h2>

      <div className="flex-1 overflow-auto">
        <div className="w-full text-foreground">
          {/* Header Row */}
          <div className="flex mb-4">
            <div className="flex-4">
              List Name
            </div>
            <div className="flex justify-center flex-1">
              Contacts
            </div>
            <div className="flex justify-center flex-1">
              Favt. Contacts
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
          {contacts.map((contact) => (
            <div key={contact.name} className="flex hover:bg-gray-50 text-foreground">
              <div className=" flex-4 gap-1 flex items-center whitespace-nowrap text-sm font-medium text-gray-900">
                <IoMdHeart className="text-lg" /><span>Favourite list</span>
              </div>
              <div className="flex justify-center text-foreground/70 flex-1 whitespace-nowrap text-sm">
                {contact.contacts}
              </div>
              <div className="flex justify-center text-foreground/70 flex-1 whitespace-nowrap text-sm">
                {contact.favt_contacts}
              </div>
              <div className="flex justify-center text-foreground/70 flex-1 whitespace-nowrap text-sm">
                {contact.last_modified}
              </div>
              <div className="flex justify-center text-foreground/70 flex-1 whitespace-nowrap text-sm font-medium">
                {contact.running_campaigns}
              </div>
              <div className="flex justify-center text-foreground gap-1 flex-1 p-2 whitespace-nowrap text-sm font-medium">
                <button className="">
                <AiFillEdit />
                </button>
                <button className="">
                <TiUserAdd className="text-foreground"/>
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
