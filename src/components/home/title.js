import Info from "components/Info";
import { useLanguage } from "../../context/languageContext";

const Title = ({theme}) => {
  const {language} = useLanguage()
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="w-64 h-auto">
        <h1 className="text-textGlobalLight dark:text-textGlobalDark font-bold text-3xl pt-8">{language.title}</h1>
        <h2 className="text-textGlobalLight dark:text-textGlobalDark py-4">
          {language.subtitle}
        </h2>
        <h2 className="text-htmlText font-medium py-2">{language.writeme}</h2>
        <Info darker={theme !== 'light' ? true : false}/>
      </div>
    </div>
  );
};

export default Title;
