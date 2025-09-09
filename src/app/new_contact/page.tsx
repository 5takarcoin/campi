"use client";

import FormInput from "@/components/FormInput";
import { useState } from "react";
import DashedLine from "@/components/DashedLine";

const faqs = [
  "How did you meet this person?",
  "What and where you meet this person?",
  "What you discussed about?",
  "What was the take away of this person?",
];

const Page = () => {
  const [openUpload, setOpenUpload] = useState(false);

  return (
    <div className="mx-4 p-4 h-full flex flex-col">
      {/* Popup - Upload  */}
      {openUpload && (
        <div
          onClick={() => setOpenUpload(false)}
          className="fixed z-50 inset-0 bg-black/50 flex flex-col items-center justify-center gap-2"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-[400px] px-8 pt-8 pb-4 w-[400px] md:w-[600px] lg:w-[900px] bg-white  rounded-lg flex flex-col gap-4"
          >
            <p className="text-foreground text-center">
              A window has been open in your app to upload documents,text,
              images or other files
            </p>

            <div className=" rounded-lg border-dashed  dashed-box flex items-center justify-center text-sm flex-1">
              <p className="text-black/50">
                your added or uploaded item will show here
              </p>
            </div>

            <p className="text-center">hit confirm to upload</p>
            <div className="text-end">
              <button className="bg-button text-white m-1 rounded-md px-4 py-1 text-md">
                Modify
              </button>
              <button
                onClick={() => setOpenUpload(false)}
                className="bg-foreground  text-white m-1 rounded-md px-4 py-1 text-md"
              >
                Confirm
              </button>
            </div>
          </div>
          <div
            // onClick={(e) => e.stopPropagation()}
            className="h-12 w-12 bg-white flex items-center justify-center rounded-full p-2"
          >
            <svg
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
            </svg>
          </div>
        </div>
      )}

      <h2 className="text-2xl mb-8">New Contact Setup</h2>

      <div className="flex-1">
        <div className="max-h-full">
          <h3 className="text-xl mb-4">Personal Details</h3>
          <div className="flex flex-col md:flex-row w-full md:gap-6">
            <div className="flex-1">
              <FormInput
                label="Name"
                name="name"
                placeholder="Type name here"
              />
              <FormInput
                label="Company name"
                name="company"
                placeholder="Type your name"
              />
            </div>
            <div className="flex-1">
              <FormInput
                label="Email"
                name="email"
                placeholder="1234@gmail.com"
              />

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
          <h3 className="text-xl mb-4">About the contact</h3>
          <textarea
            rows={2}
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="Tell me more about this person"
            name="about"
            id="atc"
          ></textarea>
          {/* FAQS */}
          <ul className="opacity-70 pl-8 flex flex-col">
            {faqs.map((faq, i) => {
              return <a key={i}>{faq}</a>;
            })}
          </ul>
        </div>

        <button className="w-full bg-button/70 rounded-lg p-2 text-white my-2">
          Import information from app
        </button>

        <DashedLine />

        <h3 className="text-xl mb-4">Note</h3>

        <button
          onClick={() => setOpenUpload(!openUpload)}
          className="w-full flex gap-2 items-center justify-center border border-foreground rounded-lg p-2 text-foreground/70 my-2"
        >
          <span>Upload attatchment </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.09731 0C5.99274 0 5.0973 0.89543 5.0973 2V5.09694H2C0.895431 5.09694 5.57266e-08 5.99237 7.44331e-09 7.09694L0 7.26716C-4.82833e-08 8.37173 0.89543 9.26716 2 9.26716H5.0973V12.3641C5.0973 13.4687 5.99274 14.3641 7.09731 14.3641H7.26753C8.3721 14.3641 9.26753 13.4687 9.26753 12.3641V9.26716H12.3641C13.4687 9.26716 14.3641 8.37173 14.3641 7.26716V7.09694C14.3641 5.99237 13.4687 5.09694 12.3641 5.09694H9.26753V2C9.26753 0.895431 8.3721 0 7.26753 0H7.09731Z"
              fill="#1B222C"
            />
          </svg>
        </button>

        <p className="w-full text-center text-foreground/70 mb-4">
          can add audio, text, image note about the person
        </p>

        <button className="w-full bg-button/70 rounded-lg p-2 text-white my-2">
          Import information from app
        </button>

        <div className="text-end">
          <button className="bg-button  text-white m-1 rounded-md px-4 py-2 text-md">
            Modify
          </button>
          <button className="bg-foreground  text-white m-1 rounded-md px-4 py-2 text-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
