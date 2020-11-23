import React, { createContext, useReducer, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

const EditorContext = createContext(null);

export let newItemByDefault = null;

export const EditorReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const x = {
        id: uuidv4(),
        text: "New text",
      };

      newItemByDefault = x;

      state.imgListItems.push(x);

      return {
        ...state,
        imgListItems: [...state.imgListItems],
      };
    case "UPDATE_ITEM":
      if (
        state.imgListItems.find((item) => {
          return item.id === action.payload.id;
        })
      ) {
        const index = state.imgListItems.findIndex((item) => {
          return item.id === action.payload.id;
        });
        state.imgListItems[index] = action.payload;
      }

      return {
        ...state,
        imgListItems: [...state.imgListItems],
      };
    case "ZOOM_IN":
      return {
        ...state,
        isZoomed: true,
      };
    case "ZOOM_OUT":
      return {
        ...state,
        isZoomed: false,
      };
    case "ROTATE":
      let newRotation = state.rotation + 90;

      if (newRotation >= 360) {
        newRotation = -360;
      }

      return {
        ...state,
        rotation: newRotation,
      };
    default:
      return state;
  }
};

export const initialState = {
  imgListItems: [],
  isZoomed: false,
  rotation: 0,
};

export const EditorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EditorReducer, initialState);
  const store = useMemo(() => [state, dispatch], [state]);
  return (
    <EditorContext.Provider value={store}>{children}</EditorContext.Provider>
  );
};

export default EditorContext;
