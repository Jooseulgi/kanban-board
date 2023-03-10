import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { cardItemState } from '../recoil/cardItem';
import { CardItemType } from '../types';
import BoardCardItem from './BoardCardItem';
import * as S from './index.style';

interface Props {
  taskType: string;
  filteredCard: CardItemType[];
}

export default function BoardCard({ taskType, filteredCard }: Props) {
  const setCard = useSetRecoilState(cardItemState);
  const { handleUpdateList, handleDragging } = useDragAndDrop();

  const handleCreateCard = () => {
    setCard(prev => [
      ...prev,
      {
        id: uuidv4(),
        title: '',
        date: '',
        state: taskType,
        manager: '',
        content: '',
      },
    ]);
  };

  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    handleUpdateList(e.dataTransfer.getData('data'), taskType);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLUListElement>) =>
    e.preventDefault();
  return (
    <S.BoardCard>
      <S.CardTitle>
        <h2>{taskType}</h2>
        <span>({filteredCard.length})</span>
      </S.CardTitle>
      <S.BoardCardList
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
      >
        {filteredCard?.map(
          (item: CardItemType) =>
            item.state === taskType && (
              <BoardCardItem
                key={item.id}
                item={item}
                handleDragging={handleDragging}
              />
            ),
        )}
      </S.BoardCardList>
      <S.CreateBtn onClick={handleCreateCard}>+ 새로 만들기</S.CreateBtn>
    </S.BoardCard>
  );
}
