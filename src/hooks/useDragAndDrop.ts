import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { cardItemState } from '../recoil/cardItem';

export const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [card, setCard] = useRecoilState(cardItemState);

  const handleUpdateList = (id: string, task: string) => {
    const filteredCard = card.find(item => item.id === id);
    if (filteredCard && filteredCard.state !== task) {
      if (Array.isArray(card)) {
        setCard(prev => [
          { ...filteredCard, state: task },
          ...prev.filter(item => item.id !== id),
        ]);
      }
    }
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    card,
    handleUpdateList,
    handleDragging,
  };
};
