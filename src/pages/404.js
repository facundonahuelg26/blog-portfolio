import Layout from "components/Layout";
import { useLanguage } from "context/languageContext";

const NotFound = () => {
  const { language } = useLanguage();
  return (
    <Layout title="Not Found | Next Js" description="Error in Next Js">
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="flex justify-center">
            <h1 className="text-textGlobalDark text-3xl mb-2">404</h1>
          </div>
          <div className="flex justify-center">
            <p className="text-textGlobalDark">
              {language.errorRequest}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
