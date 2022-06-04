import Link from "next/link";

const LinksLeft = () => {
  return (
    <div className="xl:w-3/4 2xl:w-full h-32 2xl:h-screen flex items-center justify-end w-[300px] sm:w-auto mr-[70px] sm:mr-[0]">
      <ul className="flex 2xl:flex-col">
        <li className="p-4">
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-3xl text-globalBg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </Link>
        </li>
        <li className="p-4">
          <Link href="/blog">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-3xl text-globalBg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinksLeft;
