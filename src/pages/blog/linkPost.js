import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LinkPost = ({ title, images, id }) => {
    const [imgSrc, setImgSrc] = useState(images);

    const handleOnError = () => {
      setImgSrc("/game-store.webp");
    };

  return (
    <div className="items-center w-72 pt-6 lg:mr-[86px]">
      <Link href={`/blog/${id}`}>
        <a className="text-titleBlog text-sm sm:text-lg font-bold py-2 flex justify-between">
          <span className="w-[200px]">
          {title}
          </span>
          <Image
            src={imgSrc}
            alt="images"
            width={56}
            height={56}
            objectFit='cover'
            onError={handleOnError}
            unoptimized={true}
          />
        </a>
      </Link>
    </div>
  );
};

export default LinkPost;
