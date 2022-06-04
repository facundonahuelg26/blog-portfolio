import Info from "components/Info";
import Image from "next/image";
import LinkPost from "./linkPost";

const DataWritter = ({ incidents }) => {
  return (
    <div>
      <div className="xl:w-3/4 2xl:w-full flex flex-col items-center md:flex-row 2xl:flex-col 2xl:items-start md:justify-evenly 2xl:justify-center h-auto 2xl:h-screen pl-4 w-[300px] sm:w-auto mr-[70px] sm:mr-[0]">
        <div>
          <Image
            src="https://res.cloudinary.com/dwsmc6rqr/image/upload/v1654128586/image_sup_v8i8b8.jpg"
            alt="image"
            className="rounded-full mb-4  object-cover"
            width={105}
            height={105}
            unoptimized={true}
          />
          <span className="text-titleBlog font-bold xl:px-2">Facundo Gutiérrez</span>
          <div className="xl:p-2 my-4 mr-36">
            <Info darker={false} />
          </div>
        </div>
        <div>
          {incidents.map(({ title, images, id }) => (
            <LinkPost key={id} title={title} images={images} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataWritter;
