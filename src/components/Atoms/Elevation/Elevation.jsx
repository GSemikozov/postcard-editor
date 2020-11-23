import React from "react";
import cx from "classnames";

import componentStyles from "./Elevation.module.scss";

export const Elevation = ({ children, className, styles }) => (
  <div className={cx(componentStyles.elevation, className)} style={styles}>
    {children}
  </div>
);
