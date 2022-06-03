import Layout from "components/Layout";
import { useLanguage } from "context/languageContext";

const Error = ({ statusCode }) => {
  const { language } = useLanguage();
  return (
    <Layout title="Not Found | Next Js" description="Error in Next Js">
      <div className="bg-globalBg flex justify-center items-center flex-col h-screen">
        <div>
          <h1 className="text-textGlobalDark text-3xl">{statusCode}</h1>
          <p className="text-textGlobalDark">{language.errorRequest}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
