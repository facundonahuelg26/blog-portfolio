import { useLanguage } from "../../context/languageContext";
import ButtonsLink from "./buttonsLink";

const Learning = () => {
  const {language} = useLanguage()
  return (
    <div className="flex items-center flex-col">
      <div className="w-auto h-auto">
        <h2 className="font-bold text-3xl text-textGlobalLight dark:text-textGlobalDark">{language.learning}</h2>
        <p className="text-textGlobalLight dark:text-textGlobalDark py-4">NEXT JS</p>
        <p className="text-textGlobalLight dark:text-textGlobalDark py-4">TYPESCRIPT</p>
        <p className="text-textGlobalLight dark:text-textGlobalDark py-4">TAILWIND CSS</p>
      </div>
      <div>
        <h2 className="text-textGlobalLight dark:text-textGlobalDark py-4 text-3xl font-bold">
          {language.appTitle}
        </h2>
        <h3 className="text-textGlobalLight dark:text-textGlobalDark pt-4">{language.description}</h3>
        <h3 className="text-textGlobalLight dark:text-textGlobalDark py-1">
          {language.infoApp}
        </h3>
        <ul className="pt-12 flex justify-between">
          <ButtonsLink/>
        </ul>
      </div>
    </div>
  );
};

export default Learning;
