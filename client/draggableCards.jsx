// src/DraggableCards.js
import React from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  Draggable,
  Droppable,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

const initialCards = [
  { id: 'card1', text: 'Card 1' },
  { id: 'card2', text: 'Card 2' },
  { id: 'card3', text: 'Card 3' },
];

function DraggableCards() {
  const [cards, setCards] = React.useState(initialCards);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = cards.findIndex((card) => card.id === active.id);
      const newIndex = cards.findIndex((card) => card.id === over.id);
      setCards((cards) => arrayMove(cards, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{ padding: '10px', border: '1px solid #000' }}
            id={card.id}
          >
            {card.text}
          </div>
        ))}
      </div>
    </DndContext>
  );
}

export default DraggableCards;
