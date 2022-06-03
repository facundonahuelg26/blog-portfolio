import Link from "next/link";
import { useLanguage } from "../../context/languageContext";

const List = () => {
  const { language } = useLanguage();
 
  const aClass = "hover:font-extrabold text-textGlobalLight dark:text-textGlobalDark font-bold"
  const ulList = [
    {
      id: 1,
      title: language.home,
      myClass: aClass,
      to: "/",
    },
    {
      id: 2,
      title: "Blog",
      myClass: aClass,
      to: "/blog",
    },
  ];
  return (
    <>
      <ul className="flex flex-col md:w-40 md:flex-row justify-evenly">
        {ulList.map(({ id, to, myClass, title }) => (
          <li key={id} className="py-2 hover:bg-gray-500 text-center md:hover:bg-transparent">
            <Link href={to}>
              <a className={myClass}>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
