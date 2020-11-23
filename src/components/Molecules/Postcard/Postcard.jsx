import React, { useContext, useState, useEffect } from "react";
import cx from "classnames";

import styles from "./Postcard.module.scss";
import { Elevation } from "../../Atoms/Elevation/Elevation";
import EditorContext from "../../../context";

import PlaceholderImg from "../../../assets/images/placeholder.jpg";
import { List } from "../../Organisms/List/List";
// import {DraggableList} from "../../Organisms/DraggableList/DraggableList";

export const Postcard = ({ isIcon }) => {
  const [rotation, setRotation] = useState(null);
  const [state] = useContext(EditorContext);

  useEffect(() => {
    setRotation(state.rotation);
  }, [state]);

  return (
    <Elevation
      className={cx(styles.postcardWrap, {
        [styles.isIcon]: isIcon,
      })}
      styles={{
        transform: `rotate(${rotation}deg) scale(${
          !isIcon && state.isZoomed ? 1.5 : 1
        })`,
      }}
    >
      {state.imgListItems.length > 0 && (
        <List className={styles.postcardList} data={state.imgListItems} />
        // TODO: finish draggable list
        // <DraggableList
        //   className={styles.postcardList}
        //   data={state.imgListItems}
        // />
      )}
      <img src={PlaceholderImg} className={styles.postcardImg} alt="postcard" />
    </Elevation>
  );
};
