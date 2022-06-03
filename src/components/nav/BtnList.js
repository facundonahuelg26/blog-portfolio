import { useRef } from "react";
import { useLanguage } from "../../context/languageContext";

const BtnList = () => {
    const btnOne = useRef();
    const btnTwo = useRef();
    const { handleLanguage } = useLanguage();

    const btnClass = "text-textGlobalLight hover:bg-gray-500 w-full dark:text-textGlobalDark font-bold md:px-4 py-2 hover:font-extrabold md:hover:bg-transparent"

    
    const btnList = [
        {
          id: 2,
          title: "En",
          myClass: btnClass,
          myRef: btnOne,
          click: handleLanguage,
        },
        {
          id: 3,
          title: "Es",
          myClass: btnClass,
          myRef: btnTwo,
          click: handleLanguage,
        },
      ];
  return (
    <div className="flex items-center flex-col md:flex-row">
      {btnList.map(({ id, myClass, title, click, myRef }) => (
        <button
          key={id}
          onClick={() => click(myRef)}
          className={myClass}
          ref={myRef}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default BtnList;
