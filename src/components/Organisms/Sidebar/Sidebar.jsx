import React from "react";

import styles from "./Sidebar.module.scss";
import { SidebarMenu } from "../../Molecules/SidebarMenu/SidebarMenu";

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <SidebarMenu />
  </aside>
);
