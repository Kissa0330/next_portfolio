import "../styles/globals.scss";
import "../styles/reset.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{"Raika's portfolio"}</title>
        <meta name="description" content="raika's portfolio" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
