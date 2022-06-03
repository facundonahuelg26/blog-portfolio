import LinksLeft from "./LinksLeft";
import CentralPage from "./CentralPage";
import DataWritter from "./DataWritter";
import Head from "next/head";

const Post = ({operations, incidents}) => {
  const { title, images, content, createdAt, subtitle } = operations;
  
  return (
    <>
      <Head>
      <title>Posts | Next Js</title>
      <meta name="description" content="Show posts"/>
      </Head> 
      <div className="min-h-screen bg-white grid grid-cols-gridBlogXl 2xl:grid-cols-gridBlog xl:pl-32 2xl:pl-0">
      <LinksLeft/>
      <CentralPage title={title} images={images} content={content} createdAt={createdAt} subtitle={subtitle}/>
      <DataWritter incidents={incidents}/>
    </div>   
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  try {
    const res = await fetch("https://app-strapi-next-porfolio.herokuapp.com/posts");
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

  return { props: { operations, incidents } };
}
