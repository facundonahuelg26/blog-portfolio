import Head from "next/head";
import NavBar from "./nav/NavBar";

const Layout = ({ children, title, description }) => {
  
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
    </Head>
    <div>
      <NavBar/>
      {children}
    </div>
    </>
  );
};

Layout.defaultProps = {
  title:"Portfolio",
  description:"This is my portfolio"
}

export default Layout;
