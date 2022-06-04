// import Layout from "components/Layout";

// export default function Home() {
//   return (
//     <Layout
//       title="Portfolio | Next Js"
//       description="Portfolio in Next Js"
//       >
//         <h1>kjajkjajkakj</h1>
//       </Layout>
//   )
// }

import { useTheme } from "next-themes";
import Layout from "components/Layout";
import CardImage from "components/home/cardImage";
import DescriptionPortfolio from "components/home/descriptionPortfolio";
import Learning from "components/home/learning";
import Title from "components/home/title";
import ProgressBar from "components/home/progressBar"
import fsPromises from 'fs/promises';
import path from 'path'
import { useLanguage } from "context/languageContext";

const Home = ({skills}) => {
  const { theme, setTheme } = useTheme();
  const {language} = useLanguage()

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
          <div className="flex justify-start items-center flex-col">
        <h2 className={`font-bold text-3xl text-textGlobalLight dark:text-textGlobalDark  lg:pt-0`}>{language.skills}</h2>
        {skills.map(item => (
            <div key={item.id} className="w-auto h-auto">
                <h2 className="text-htmlText font-medium py-4">{item.title}</h2>
                {item.info.map(({id, subtitle, progress}) => (
                  <ProgressBar key={id} subtitle={subtitle} progress={progress} />
                ))}
            </div>
        ))}
    </div>
        </div>
        <div className="w-full flex justify-center">
          <DescriptionPortfolio />
        </div>
      </main>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  
  return {
    props: objectData
  }
}
