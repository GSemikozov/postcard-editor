import React from "react";

import styles from "./Main.module.scss";
import { Postcard } from "../../Molecules/Postcard/Postcard";

export const Main = () => (
  <main className={styles.main}>
    <div className={styles.postcardWrap}>
      <Postcard />
    </div>
    <div className={styles.postcardIconWrap}>
      <Postcard isIcon={true} />
    </div>
  </main>
);
