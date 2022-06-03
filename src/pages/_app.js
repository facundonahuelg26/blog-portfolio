import "../styles/globals.css";
import Router from "next/router"
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../context/languageContext";
import nProgress from "nprogress";
import nprogress from "../styles/nprogress.css"


Router.events.on("routeChangeStart", nProgress.start)
Router.events.on("routeChangeError", nProgress.done)
Router.events.on("routeChangeComplete", nProgress.done)

function MyApp({ Component, pageProps }) {

  return (
      <ThemeProvider attribute="class">
      <LanguageProvider>
          <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
