import LinksLeft from "./linksLeft";
import CentralPage from "./centralPage";
import Head from "next/head";
import Info from "components/Info";
import Image from "next/image";
import LinkPost from "./linkPost";

const Post = ({
  incidents,
  title,
  images,
  content,
  subtitle,
  dateOfCreation,
}) => {
  return (
    <>
      <Head>
        <title>Posts | Next Js</title>
        <meta name="description" content="Show posts" />
      </Head>
      <div className="min-h-screen bg-white grid grid-cols-gridBlogXl 2xl:grid-cols-gridBlog xl:pl-32 2xl:pl-0">
        <LinksLeft />
        <CentralPage
          title={title}
          images={images}
          content={content}
          dateOfCreation={dateOfCreation}
          subtitle={subtitle}
        />
        <div>
          <div className="xl:w-3/4 2xl:w-full flex flex-col items-center md:flex-row 2xl:flex-col 2xl:items-start md:justify-evenly 2xl:justify-center h-auto 2xl:h-screen pl-4 w-[300px] sm:w-auto mr-[70px] sm:mr-[0]">
            <div className="flex flex-col items-start">
              <Image
                src="https://res.cloudinary.com/dwsmc6rqr/image/upload/v1654128586/image_sup_v8i8b8.jpg"
                alt="image"
                className="rounded-full mb-4  object-cover"
                width={105}
                height={105}
                unoptimized={true}
              />
              <span className="text-titleBlog font-bold xl:px-2 pt-2">
                Facundo Gutiérrez
              </span>
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
      </div>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  try {
    const res = await fetch(
      "https://app-strapi-next-porfolio.herokuapp.com/posts"
    );
    const posts = await res.json();

    const paths = posts.map(({ id }) => ({
      params: { id: `${id}` },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const [operationsRes, incidentsRes] = await Promise.all([
    fetch("https://app-strapi-next-porfolio.herokuapp.com/posts/" + params.id),
    fetch("https://app-strapi-next-porfolio.herokuapp.com/posts"),
  ]);
  const [operations, incidents] = await Promise.all([
    operationsRes.json(),
    incidentsRes.json(),
  ]);
  const { title, images, content, subtitle, createdAt } = operations;
  const date = createdAt.split("T");
  const dateOfCreation = date[0];
  return {
    props: { incidents, title, images, content, subtitle, dateOfCreation },
  };
}
