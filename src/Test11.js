import React from "react";
import styles from "./Test11.module.css";
import Grass from "./grass2.png";

const Test11 = () => {
  return (
    <>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <div className={styles.div3}>
            <div className={styles.div4}>
              <div className={styles.div5}>
                <div className={styles.div6}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div7}></div>
      <img src={Grass}></img>
    </>
  );
};

export default Test11;
