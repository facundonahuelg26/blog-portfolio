import { useLanguage } from "context/languageContext";

const DescriptionPortfolio = () => {
    const {language} = useLanguage()

  return (
    <div className="w-full md:w-1/2">
      <div className="w-full flex justify-center">
        <h2 className="text-textGlobalLight dark:text-textGlobalDark font-bold text-3xl mt-24">
          {language.aboutPortfolio}
        </h2>
      </div>
      <p className="text-textGlobalLight dark:text-textGlobalDark pt-8 pb-8">
        {language.descriptionPortfolio}
      </p>
      <a href="https://github.com/facundonahuelg26/blog-portfolio.git" className="text-htmlText font-medium pt-8 pb-8 mb-8 hover:font-bold" target="_blank" rel="noreferrer">
        {language.linkPortfolioGithub}
      </a>
    </div>
  );
};

export default DescriptionPortfolio;
