import React, { useContext, useState } from "react";
import EditorContext from "../../../context";

import styles from "./EditableText.module.scss";

export const EditableText = ({
  id,
  text,
  placeholder,
  initValue,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(initValue);
  const [state, dispatch] = useContext(EditorContext);

  const handleKeyDown = (event) => {
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey];

    if (keys.indexOf(key) > -1 || allKeys.indexOf(key) > -1) {
      dispatch({
        type: "UPDATE_ITEM",
        payload: {
          id: id,
          text: event.target.value,
        },
      });
      setEditing(false);
    }
  };

  return (
    <div {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e)}
        >
          <input
            className={styles.input}
            type="text"
            name="text"
            placeholder="Placeholder"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{text || placeholder || "Editable content"}</span>
        </div>
      )}
    </div>
  );
};
