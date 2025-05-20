// "use client";

import FormInput from "@/components/FormInput";
import React from "react";
import DashedLine from "@/components/DashedLine";

const page = () => {
  return (
    <div className="mx-4 p-4">
      <h2 className="text-2xl mb-8">New Contact Setup</h2>

      <h3 className="text-xl mb-4">Personal Details</h3>
      <div className="flex flex-col md:flex-row w-full md:gap-6">
        <div className="flex-1">
          <FormInput label="Name" name="name" placeholder="Type name here" />
          <FormInput
            label="Company name"
            name="company"
            placeholder="Type your name"
          />
        </div>
        <div className="flex-1">
          <FormInput label="Email" name="email" placeholder="1234@gmail.com" />

          <FormInput label="Company web" name="web" paste />
        </div>
      </div>

      <DashedLine />

      <h3 className="text-xl mb-4">Social Media</h3>
      <div className="flex flex-col md:flex-row w-full md:gap-6">
        <div className="flex-1">
          <FormInput label="Facebook" name="fb" paste />
          <FormInput label="Instagram" name="ig" paste />
        </div>
        <div className="flex-1">
          <FormInput label="LinkedIn" name="li" paste />
          <FormInput label="WhatsApp" name="wa" paste />
        </div>
      </div>

      <DashedLine />

      <div className="text-end">
        <button className="bg-[#384F70]  text-white m-1 rounded-md px-4 py-2 text-md">
          Modify
        </button>
        <button className="bg-foreground  text-white m-1 rounded-md px-4 py-2 text-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default page;
