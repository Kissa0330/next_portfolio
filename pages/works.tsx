import Image from "next/image";
import styles from "../styles/works.module.scss";

export default function Works() {
  return (
    <div>
      <div className={styles.works_div_head_wrap}>
        <div className={styles.works_div_title_box}>
          <h1 className={styles.works_h1_title_text}>WORKS</h1>
        </div>
        <div className={styles.works_div_category_wrap}>
          <div className={styles.works_div_category_box}>
            <div className={styles.works_div_category_text}>42tokyo</div>
          </div>
          <div className={styles.works_div_category_box}>
            <div className={styles.works_div_category_text}>Web</div>
          </div>
          <div className={styles.works_div_category_box}>
            <div className={styles.works_div_category_text}>Design</div>
          </div>
        </div>
      </div>
      <div className={styles.works_div_works_wrap}>
        <div className={styles.works_div_work_wrap}>
          <Image
            style={{ height: "auto", maxWidth: "100%" }}
            src="/DisPlay.png"
            alt="works photo"
            width={500}
            height={300}
            priority
          />
          <div className={styles.works_div_text_wrap}>
            <p className={styles.works_p_time}>2021 2</p>
            <h2 className={styles.works_h2_title}>DisPlay</h2>
            <p className={styles.works_p_category}>Web service</p>
          </div>
        </div>
        <div className={styles.works_div_work_wrap}>
          <Image
            style={{ height: "auto", maxWidth: "100%" }}
            src="/DisPlay.png"
            alt="works photo"
            width={500}
            height={300}
            priority
          />
          <div className={styles.works_div_text_wrap}>
            <p className={styles.works_p_time}>2021 2</p>
            <h2 className={styles.works_h2_title}>DisPlay</h2>
            <p className={styles.works_p_category}>Web service</p>
          </div>
        </div>
        <div className={styles.works_div_work_wrap}>
          <Image
            style={{ height: "auto", maxWidth: "100%" }}
            src="/DisPlay.png"
            alt="works photo"
            width={500}
            height={300}
            priority
          />
          <div className={styles.works_div_text_wrap}>
            <p className={styles.works_p_time}>2021 2</p>
            <h2 className={styles.works_h2_title}>DisPlay</h2>
            <p className={styles.works_p_category}>Web service</p>
          </div>
        </div>
        <div className={styles.works_div_work_wrap}>
          <Image
            style={{ height: "auto", maxWidth: "100%" }}
            src="/DisPlay.png"
            alt="works photo"
            width={500}
            height={300}
            priority
          />
          <div className={styles.works_div_text_wrap}>
            <p className={styles.works_p_time}>2021 2</p>
            <h2 className={styles.works_h2_title}>DisPlay</h2>
            <p className={styles.works_p_category}>Web service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
