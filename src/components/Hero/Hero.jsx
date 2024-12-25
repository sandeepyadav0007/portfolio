import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sandeep</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.option}>
        <a href="mailto:sandeepyadav8sy8@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://drive.google.com/file/d/14cw3Ss071QzVULQXaDnE2O1iK5g5iSg3/view?usp=sharing" target="_blank" className={styles.contactBtn}>
          Resume 
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
