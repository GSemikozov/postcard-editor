import React from "react";
import { shallow } from "enzyme";
import App from "./components/Pages/App/App";
import { EditorReducer, initialState, newItemByDefault } from "./context";

it("App renders without crashing", () => {
  shallow(<App />);
});

describe("context|reducer", () => {
  it('returns new state for "ZOOM_IN" action type', () => {
    const updatedState = EditorReducer(initialState, { type: "ZOOM_IN" });
    expect(updatedState.isZoomed).toEqual(true);
  });

  it('returns new state for "ADD_ITEM" action type', () => {
    const updatedState = EditorReducer(initialState, { type: "ADD_ITEM" });
    expect(updatedState.imgListItems).toEqual([newItemByDefault]);
  });

  it('returns updated state for "UPDATE_ITEM" action type', () => {
    // update initial state
    const updatedState = EditorReducer(initialState, {
      type: "UPDATE_ITEM",
      payload: newItemByDefault,
    });
    expect(updatedState.imgListItems).toEqual([newItemByDefault]);
  });
});
