import Layout from '../../components/Layout'
import Card from './card'
import Error from '../_error'

const Blog =  ({response, statusCode}) => {
  if(statusCode){
    return <Error statusCode={statusCode}/>
  }
  
  return (
    <Layout
      title="Blog | Next Js"
      description="Blog posts"
    >
        <main className='bg-gray-100 w-full min-h-screen flex justify-center'>
          <div className='bg-gray-100 text-textGlobalLight w-full grid grid-cols-gridCards justify-items-center items-center gap-3 lg:w-8/12 mt-10 2xl:mt-0'>
            {response.map(({ images, title, id }) => (
              <Card key={id} images={images} title={title} id={id}/>
            ))}
          </div>           
        </main>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const res = await fetch('https://app-strapi-next-porfolio.herokuapp.com/posts')

    const posts = await res.json()
  
    const statusCode = res.status > 200 ? res.status : false;
  
  return {
    props: {
      response:posts,
      statusCode
    },
  }
 
}

