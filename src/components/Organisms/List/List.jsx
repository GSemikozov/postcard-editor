import React from "react";
import cx from "classnames";

import componentStyles from "./List.module.scss";
import { ListItem } from "../../Molecules/ListItem/ListItem";

export const List = ({ data, className, styles }) => {
  return (
    <div className={cx(componentStyles.list, className)} style={styles}>
      {data.map((item) => (
        <ListItem key={item.id} id={item.id} text={item.text} isEdit={false} />
      ))}
    </div>
  );
};
