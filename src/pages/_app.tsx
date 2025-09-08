import { AppProps } from "next/app";
import GlobalStyle from "../components/globalstyles";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
