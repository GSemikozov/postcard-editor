import React, { useRef, useState, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";

import { ListItem } from "../../Molecules/ListItem/ListItem";

const style = {
  cursor: "move",
};

const Item = ({ id, text, index, moveItem }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "item",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveItem(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: "item", id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <ListItem
      text={text}
      isEdit={false}
      id={id}
      ref={ref}
      style={{ ...style, opacity }}
    />
  );
};

const Container = ({ data, className }) => {
  {
    const [items, setItems] = useState(data);
    const moveItem = useCallback(
      (dragIndex, hoverIndex) => {
        const dragItem = items[dragIndex];
        setItems(
          update(items, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragItem],
            ],
          })
        );
      },
      [items]
    );
    const renderItem = (item, index) => {
      return (
        <Item
          key={item.id}
          index={index}
          id={item.id}
          text={item.text}
          moveItem={moveItem}
        />
      );
    };

    return (
      <div style={style} className={className}>
        {items.length > 0 && items.map((item, i) => renderItem(item, i))}
      </div>
    );
  }
};

export const DraggableList = ({ data, className }) => (
  <Container data={data} className={className} />
);
