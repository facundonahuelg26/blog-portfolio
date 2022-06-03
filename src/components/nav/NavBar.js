import React,{ useState }  from "react";
import BtnList from "./BtnList";
import List from "./List";

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="h-14 flex  md:items-center justify-center  md:flex-row md:justify-end bg-gray-200 dark:bg-globalNavBg">
        <div onClick={() => setOpen(!open)} className="absolute top-2 right-2" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 my-3 mx-2 md:hidden cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="w-full mt-14 md:mt-0 flex justify-center md:flex-row md:justify-end bg-gray-200 dark:bg-globalNavBg h-auto absolute pb-3 md:pb-0">
          <div className={`md:flex transition-all duration-1000 ease in ${open ? 'max-h-max' : 'overflow-hidden max-h-0'} md:max-h-max w-full md:w-auto`}>
          <List />
          <BtnList/>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
