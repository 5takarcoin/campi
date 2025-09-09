"use client";

import { FaUserCircle } from "react-icons/fa";

const personalDetails = [
  { label: "Company name", value: "linkedin.com" },
  { label: "Email", value: "https://techinnovations.com" },
  { label: "Company website", value: "jane.smith@techinnovations.com" },
];

const contactDetails = [
  { label: "Linkedin", value: "linkedin.com" },
  { label: "Website", value: "https://techinnovations.com" },
  { label: "Contact Email", value: "jane.smith@techinnovations.com" },
  { label: "Contact Phone", value: "+1 (555) 999-8888" },
];

const communication = [
  "AI Analytics Suite",
  "Data Integration Platform"
]

const Page = () => {

  return (
    <div className="mx-4 p-4 h-full flex flex-col">
    
      <h2 className="text-2xl flex gap-2 items-center">
        <span>John Carter</span>
        <FaUserCircle className="text-xl"/>
        <button className="w-20 bg-orangish rounded-lg text-base">Buyer</button>
        <button className="w-20 bg-greenish rounded-lg text-base">Qualified</button>
      </h2>
      <h3 className="mb-8">Company name</h3>
      <div>

      <div className="flex flex-col gap-4">
        <div className="px-8 py-4 rounded-xl bg-button/10">
        <h3 className="text-2xl mb-2 flex gap-2 items-center">
          Personal Details
        </h3>
        
       {personalDetails.map((detail) => (
        <div key={detail.label} className="flex">
          <span className="w-72">{detail.label}</span>
          <span className="">{detail.value}</span>
        </div>
       ))}

      </div>

      <div className="px-8 py-4 rounded-xl bg-button/10">
        <h3 className="text-2xl mb-2 flex gap-2 items-center">
          Contact Details
        </h3>
        
        
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex">
            <span className="w-72">{detail.label}</span>
            <span className="">{detail.value}</span>
          </div>
        ))}
      </div>

      <div className="px-8 py-4 rounded-xl bg-button/10">
        <h3 className="text-2xl mb-2 flex gap-2 items-center">
          Communication
        </h3>

        {communication.map((detail) => (
          <div key={detail} className="flex gap-2 items-center">
            <span className="h-[6px] w-[6px] bg-foreground rounded-full"></span><span className="">{detail}</span>
          </div>
        ))}
      </div>

      <div className="px-8 py-4 rounded-xl bg-button/10">
        <h3 className="text-2xl mb-2 flex gap-2 items-center">
          Approach strategy
        </h3>

        <div className="flex flex-col gap-2">
          <div className="bg-button/70 flex items-center gap-2 rounded-lg py-1 px-4">

            <span className="w-4 h-4 bg-orangish rounded-full inline-block"></span>
            <span className="">Strategy 1</span>
          </div>
          <div className="bg-button/70 flex items-center gap-2 rounded-lg py-1 px-4">
            <span className="w-4 h-4 bg-foreground rounded-full inline-block"></span>
            <span className="">Strategy 2</span>
          </div>
          <div className="bg-button/70 flex items-center gap-2 rounded-lg py-1 px-4">
            <span className="w-4 h-4 bg-foreground rounded-full inline-block"></span>
            <span className="">Strategy 3</span>
          </div>
          <div className="flex justify-center">
            <button className="m-auto cursor-pointer text-white rounded-lg py-1 px-4 bg-button">Start Campaign</button>
          </div>
        </div>

      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Page;
