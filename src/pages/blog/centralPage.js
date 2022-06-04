import Image from "next/image";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const CentralPage = ({title, images, content, subtitle, dateOfCreation}) => {
  const [image, setImage] = useState("/game-store.webp");

  useEffect(() => {
    if (images) {
      setImage(images);
    }
  }, [images]);

  return (
    <div className="2xl:border-dashed 2xl:border border-gray-300 xl:w-3/4 2xl:w-full">
      <div className="pt-10 px-6 flex items-center">
        <Image src="https://res.cloudinary.com/dwsmc6rqr/image/upload/v1653793679/1_yUNfohs9jA6GCDmyCYJTvA_2x_1_b8g1rd.webp" alt="image javascript" className="rounded-full" width={32} height={32} unoptimized={true} />
        <span className="text-contentBlog px-2">Javascript Developers</span>
      </div>
      <div className="pt-10 px-6">
      <span className="text-contentBlog font-semibold" >{dateOfCreation}</span>
      </div>
      <div className="w-full flex justify-center">
      <div className="lg:w-3/4">
      <h1 className="w-[300px] sm:w-auto mr-[70px] sm:mr-[0] md:text-3xl font-bold flex justify-start w-full mt-14 mb-2 text-titleBlog sm:pl-4 lg:pl-0">
        {title}
      </h1>
      <h2 className="w-[300px] sm:w-auto mr-[70px] sm:mr-[0] sm:w-auto md:text-xl font-bold flex justify-start w-full mb-14 text-titleBlog sm:pl-4 lg:pl-0">{subtitle}</h2>
      </div>
      </div>
      <div className="w-full flex justify-center sm:w-auto">
      <div className="flex justify-center  xl:mr-[76px] w-[300px] sm:w-auto mr-[80px] sm:mr-[0]">
        <Image 
          src={image} 
          alt={title} 
          width={692} 
          height={692} 
          objectFit='cover'
          unoptimized={true}
        />
      </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center">
        <div className="w-[300px] sm:w-auto lg:w-[692px] mr-20 text-contentBlog pb-16 prose lg:prose-lg">
          <ReactMarkdown>
              {content}
          </ReactMarkdown> 
        </div>
      </div>
    </div>
  );
};

export default CentralPage;
