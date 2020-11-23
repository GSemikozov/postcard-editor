import React from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

export const Button = ({ title, handleClick, className }) => (
  <button
    type="button"
    className={cx(styles.button, className)}
    onClick={handleClick}
  >
    {title}
  </button>
);
