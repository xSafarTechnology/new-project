import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const handleDropdownToggle = () => {
    setOpen(true);
  };

  return (
    <div onMouseLeave={() => setOpen(false)} className="relative">
      <button
        onMouseOver={handleDropdownToggle}
        className="flex text-sm items-center whitespace-nowrap rounded md:hover:bg-transparent md:hover:text-blue-600 md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 py-2 pl-3 pr-4 font-bold leading-normal text-gray-500 transition hover:duration-150 ease-in-out motion-reduce:transition-none"
      >
        <span className="mr-2">Courses</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>{" "}
      </button>
      <li>
        <div className="relative" data-te-dropdown-ref>
          <ul
            className={`absolute py-2 px-20 rounded-lg shadow-xl ${open ? "block" : "hidden"
              }`}
            style={{ zIndex: 10 }} // Add this line to set the z-index for the dropdown
          >
          <li>
            <div>
              <Link
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold bg-white   hover:text-white active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:hover:bg-neutral-600 dark:text-neutral-600"
                to="/BbaHospitality"
                data-te-dropdown-item-ref
              >
               BBA in Hospitality &<br/>  Tourism Management
              </Link>
            </div>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold bg-white   hover:text-white active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:hover:bg-neutral-600 dark:text-neutral-600"
              to="/DataSecurity"
              data-te-dropdown-item-ref >
            B.sc in Hotel Management
            </Link>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold bg-white   hover:text-white active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:hover:bg-neutral-600 dark:text-neutral-600 "
              to="/WebsiteDevelopment"
              data-te-dropdown-item-ref
            >
             BBA in Hotel Management
            </Link>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold bg-white   hover:text-white active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:hover:bg-neutral-600 dark:text-neutral-600"
              to="/UiUxDesign"
              data-te-dropdown-item-ref
            >
                MBA in Hospitality <br/> & Tourism Management
            </Link>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold bg-white   hover:text-white active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:hover:bg-neutral-600 dark:text-neutral-600"
              to="/CloudServices"
              data-te-dropdown-item-ref
            >
              Master in Hospital <br/> Administration (MHA)
            </Link>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold bg-white   hover:text-white active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:hover:bg-neutral-600 dark:text-neutral-600"
              to="/GameDevelopment"
              data-te-dropdown-item-ref
            >
            Diploma Courses
            </Link>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-bold bg-white   hover:text-white active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:hover:bg-neutral-600 dark:text-neutral-600"
              to="/CrmAndSoftware"
              data-te-dropdown-item-ref
            >
              All Courses
            </Link>
          </li>
        </ul>
      </div>
    </li>
    </div>
  );
};

export default Dropdown;
