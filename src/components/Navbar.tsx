import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="p-4 text-white">
      <div className="p-4 rounded-lg bg-foreground w-full h-12 flex items-center justify-between">
        <div className="flex gap-2">
          <Image src="/logo.svg" alt="Logo" width={24} height={24}></Image>
          <p className="text-xl text-white ">Campi</p>
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <ul className="flex gap-4 text-white">
              {["Contacts", "Campaigns", "Management", "Dashboard"].map(
                (item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        index !== 0 && "opacity-50"
                      } flex items-center gap-1`}
                    >
                      {item}{" "}
                      <span>
                        <svg
                          className={`${index !== 0 && "hidden"}`}
                          width="12"
                          height="12"
                          viewBox="0 0 18 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.5"
                            d="M10.7321 14C9.96225 15.3333 8.03775 15.3333 7.26795 14L1.20577 3.5C0.435974 2.16667 1.39822 0.499998 2.93782 0.499999L15.0622 0.5C16.6018 0.5 17.564 2.16667 16.7942 3.5L10.7321 14Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <button className="border-2 border-solid border-white rounded-lg px-2 py-[2px]">
            Book a demo
          </button>
          <div className="flex items-center gap-4">
            <button>
              <Image
                src="/settings.svg"
                alt="Logo"
                width={16}
                height={16}
              ></Image>
            </button>
            <button>
              <Image
                src="/notification.svg"
                alt="Logo"
                width={13}
                height={10}
              ></Image>
            </button>
            <button>
              <Image
                src="/profile.svg"
                alt="Logo"
                width={13}
                height={16}
              ></Image>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
