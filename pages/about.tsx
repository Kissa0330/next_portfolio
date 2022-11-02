import styles from "../styles/about.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.about_div_box}>
        <h1 className={styles.about_h1_title}>PROFILE</h1>
      </div>
      <p className={styles.about_p_text}>
        42tokyo/近畿大学文芸学部所属。Web開発/デザインをしてます。
        <br />
        エンジニアリングで生きることが目標です。
      </p>
      <div className={styles.about_div_links}>
        <div className={styles.about_div_link_wrap}>
          <a
            href="https://twitter.com/designer_raika"
            target="blank"
            className={styles.about_a_link}
          >
            Twitter
          </a>
          <div className={styles.about_div_twitter_line}></div>
        </div>
        <div className={styles.about_div_link_wrap}>
          <a
            href="https://github.com/Kissa0330"
            target="blank"
            className={styles.about_a_link}
          >
            github
          </a>
          <div className={styles.about_div_github_line}></div>
        </div>
      </div>
      <div className={styles.about_div_box}>
        <h1 className={styles.about_h1_title}>RESUME</h1>
      </div>
      <ul className={styles.about_ul_lists}>
        <li className={styles.about_li_list}>2020.4   近畿大学入学</li>
        <li className={styles.about_li_list}>2021.10 42tokyo入学</li>
        <li className={styles.about_li_list}>2022.1   GCI winter 2021 修了</li>
        <li className={styles.about_li_list}>2022.4   学校法人クラスジャパン 業務委託</li>
        <li className={styles.about_li_list}>2022.7   株式会社チームラボ サマーインターン(Webアプリコース)</li>
      </ul>
    </div>
  );
}
