import React, { forwardRef } from "react";
import cx from "classnames";

import styles from "./ListItem.module.scss";
import { EditableText } from "../EditableText/EditableText";

export const ListItem = forwardRef(({ text, id, isEdit, ...rest }, ref) => {
  return (
    <div
      className={cx(styles.listItem, {
        [styles.isEdit]: isEdit,
      })}
      ref={ref}
      {...rest}
    >
      <EditableText id={id} text={text} initValue={text} />
    </div>
  );
});
