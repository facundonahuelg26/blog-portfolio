import { useTheme } from "next-themes";
import Layout from "../components/Layout";
import CardImage from "./home/cardImage";
import DescriptionPortfolio from "./home/descriptionPortfolio";
import Learning from "./home/learning";
import Skills from "./home/skills";
import Title from "./home/title";

const Index = () => {
  const { theme, setTheme } = useTheme();
 

  const mainContainer =
    "min-h-screen flex flex-col items-center bg-gray-100 dark:bg-globalBg py-16";
  const wrapperIndex =
    "container pl-2 md:pl-0 grid sm:grid-cols-1 lg:w-full 2xl:w-3/5 lg:grid-cols-2";

  return (
    <Layout
      title="Portfolio | Next Js"
      description="Portfolio in Next Js"
    >
      <main className={mainContainer}>
        <div className={wrapperIndex}>
          <Title theme={theme} />
          <CardImage theme={theme} setTheme={setTheme} />
          <Learning />
          <Skills />
        </div>
        <div className="w-full flex justify-center">
          <DescriptionPortfolio />
        </div>
      </main>
    </Layout>
  );
};

export default Index;
