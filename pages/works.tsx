import Image from "next/image";
import styles from "../styles/works.module.scss";
import works from "../static/works.json";
import Link, { LinkProps } from "next/link";
import { useState } from "react";

export default function Works() {
  const [category, setCategory] = useState("none");
  const ftClassname =
    category == "42 subject"
      ? `${styles["isSelected"]} ${styles.works_div_category_box}`
      : styles.works_div_category_box;

  const WebClassname =
    category == "Web"
      ? `${styles["isSelected"]} ${styles.works_div_category_box}`
      : styles.works_div_category_box;

  const DesignClassname = category == "Design"
    ? `${styles["isSelected"]} ${styles.works_div_category_box}`
    : styles.works_div_category_box;
  return (
    <div>
      <div className={styles.works_div_head_wrap}>
        <div className={styles.works_div_title_box}>
          <h1 className={styles.works_h1_title_text}>WORKS</h1>
        </div>
        <div className={styles.works_div_category_wrap}>
          <div className={ftClassname} onClick={() => setCategory(category == "42 subject" ? "none" : "42 subject")}>
            <div className={styles.works_div_category_text}>42 subject</div>
          </div>
          <div className={WebClassname} onClick={() => setCategory(category == "Web" ? "none" : "Web")}>
            <div className={styles.works_div_category_text}>Web</div>
          </div>
          <div className={DesignClassname} onClick={() => setCategory(category == "Design" ? "none" : "Design")}>
            <div className={styles.works_div_category_text}>Design</div>
          </div>
        </div>
      </div>
      <div className={styles.works_div_works_wrap}>
        {works.map((item) => {
          return (
            (category == "none" || category == item.category) && <Link key={item.id} href={`/works/${item.id}`}>
              <div className={styles.works_div_work_wrap}>
                <Image
                  style={{ height: "auto", maxWidth: "100%" }}
                  src={item.image}
                  alt="works photo"
                  width={500}
                  height={300}
                  priority
                />
                <div className={styles.works_div_text_wrap}>
                  <p className={styles.works_p_time}>{item.time}</p>
                  <h2 className={styles.works_h2_title}>{item.title}</h2>
                  <p className={styles.works_p_category}>{item.category}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
