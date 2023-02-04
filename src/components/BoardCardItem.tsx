import { HiOutlineTrash } from 'react-icons/hi';
import { BsList } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cardItemState } from '../recoil/cardItem';
import { detailIdState } from '../recoil/detail';
import { CardItemType } from '../types';
import * as S from './index.style';

interface Props {
  item: CardItemType;
  handleDragging: (dragging: boolean) => void;
}
export default function BoardCardItem({ item, handleDragging }: Props) {
  const [card, setCard] = useRecoilState(cardItemState);
  const setDetailShow = useSetRecoilState(detailIdState);

  const handleDetailShow = (id: string) => {
    setDetailShow(id);
  };

  const handleDeleteCard = (id: string) => {
    setCard(card.filter(el => el.id !== id));
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('data', item.id);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);

  return (
    <S.CardItem
      onClick={() => {
        handleDetailShow(item.id);
      }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <S.ItemTitle>
        <BsList />
        {!item.title ? '제목없음' : item.title}
      </S.ItemTitle>
      <S.ModifyBtn>
        <button
          type="button"
          onClick={() => {
            handleDeleteCard(item.id);
          }}
        >
          <HiOutlineTrash />
        </button>
      </S.ModifyBtn>
    </S.CardItem>
  );
}
