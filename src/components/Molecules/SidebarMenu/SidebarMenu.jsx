import React, { useContext, useCallback } from "react";

import { Button } from "../../Atoms/Button/Button";

import styles from "./SidebarMenu.module.scss";
import EditorContext from "../../../context";

export const SidebarMenu = () => {
  const [state, dispatch] = useContext(EditorContext);

  const addNewText = useCallback(() => {
    dispatch({ type: "ADD_ITEM" });
  }, [dispatch]);

  const onRotate = useCallback(() => {
    dispatch({ type: "ROTATE" });
  }, [dispatch]);

  const onZoomIn = useCallback(() => {
    dispatch({ type: "ZOOM_IN" });
  }, [dispatch]);

  const onZoomOut = useCallback(() => {
    dispatch({ type: "ZOOM_OUT" });
  }, [dispatch]);

  return (
    <div className={styles.sidebarMenuWrap}>
      <Button
        title="New text block"
        className="mb-10"
        handleClick={addNewText}
      />
      <Button title="ZOOM IN" className="mb-10" handleClick={onZoomIn} />
      <Button title="ZOOM OUT" className="mb-10" handleClick={onZoomOut} />
      <Button title="ROTATE" handleClick={onRotate} />
    </div>
  );
};
