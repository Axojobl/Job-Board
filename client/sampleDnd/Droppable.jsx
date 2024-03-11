import { useDroppable } from '@dnd-kit/core';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import SortableItem from './SortableItem.jsx';
import React from 'react';

const Droppable = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id });

  const droppableStyle = {
    padding: '20px 10px',
    border: '1px solid black',
    borderRadius: '5px',
    minWidth: 110,
  };

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} style={droppableStyle}>
        {items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </div>
    </SortableContext>
  );
};

export default Droppable;
