import styles from "../styles/header.module.scss";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <div className={styles.header_div_wrap}>
        <div className={styles.header_div_wrap_right}>
          <h1 className={styles.header_h1_title}>RAIKA{"'"}S PORTFOLIO</h1>
        </div>
        <div className={styles.header_div_wrap_left}>
          <Link href="/">
            <div className={styles.header_div_textwrap}>
              <h2 className={styles.header_h2_subtitle}>TOP</h2>
              {router.pathname == "/" && (
                <div
                  className={`${styles.header_div_top_line} ${styles.top}`}
                />
              )}
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.header_div_textwrap}>
              <h2 className={styles.header_h2_subtitle}>ABOUT</h2>
              {router.pathname == "/about" && (
                <div
                  className={`${styles.header_div_top_line} ${styles.about}`}
                />
              )}
            </div>
          </Link>
          <Link href="/works">
            <div className={styles.header_div_textwrap}>
              <h2 className={`${styles.header_h2_subtitle} ${styles.works}`}>WORKS</h2>
              {router.pathname == "/works" && (
                <div
                  className={`${styles.header_div_top_line} ${styles.works}`}
                />
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
