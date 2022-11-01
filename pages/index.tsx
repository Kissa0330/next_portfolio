import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>portfolio</title>
        <meta name="description" content="raika's portfolio"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.top_div_wrap}>
        <div className={styles.top_div_right_wrap}>
          <div className={styles.top_div_Hello}>
            <h1 className={styles.top_h1_Hello_text}>Hello</h1>
          </div>
        </div>
        <div className={styles.top_div_imgwrap}>
          <Image style={{height: "auto", maxWidth:"100%"}} src="/takanoraika.png" alt="my photo" width={533} height={315} priority/>
        </div>
      </div>
      <div className={styles.top_div_introduction}>
            <h3 className={styles.top_h3_introduction}>
              {"I'm frontend engineer and designer"}
            </h3>
          </div>
    </div>
  );
}
