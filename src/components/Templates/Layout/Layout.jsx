import React from "react";

import styles from "./Layout.module.scss";
import { Sidebar } from "../../Organisms/Sidebar/Sidebar";
import { Main } from "../../Organisms/Main/Main";

export const Layout = () => (
  <div className={styles.layout}>
    <Main />
    <Sidebar />
  </div>
);
