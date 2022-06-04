import { useLanguage } from "context/languageContext";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, images, id }) => {
  const {language} = useLanguage()
  return (
    <div className="w-72 h-auto flex justify-center items-center flex-col bg-white mt-4 md:mt-0 my-4 md:my-0 md:mx-4 rounded-md shadow-lg">
      <figure>
        <div className="h-auto mt-24">
          <Image
            src={images}
            alt="image"
            width={256}
            height={256}
            objectFit="cover"
            unoptimized={true}
          />
        </div>
        <figcaption className="w-full flex justify-center h-auto my-10 items-start md:text-base py-4 font-semibold bg-globalNavBg text-textGlobalDark">
          {title}
        </figcaption>
      </figure>
      <div className="pb-6">
        <Link href={`/blog/${id}`}>
          <a className="font-bold">{language.readPost}</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
