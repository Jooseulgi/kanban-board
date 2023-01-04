import { HiOutlineTrash } from 'react-icons/hi';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cardItemState } from '../recoil/cardItem';
import { detailState } from '../recoil/detail';
import { CardItemType } from '../types';
import * as S from './index.style';

interface Props {
  item: CardItemType;
}
export default function BoardCardItem({ item }: Props) {
  const [card, setCard] = useRecoilState(cardItemState);
  const setDetailShow = useSetRecoilState(detailState);

  const handleDetailShow = (id: string) => {
    setDetailShow({ id });
  };

  const onDeleteCard = (id: string) => {
    setCard(card.filter(el => el.id !== id));
  };
  return (
    <S.CardItem
      onClick={() => {
        handleDetailShow(item.id);
      }}
    >
      <div>제목 없음</div>
      <S.ModifyBtn>
        <button
          type="button"
          onClick={() => {
            onDeleteCard(item.id);
          }}
        >
          <HiOutlineTrash />
        </button>
      </S.ModifyBtn>
    </S.CardItem>
  );
}
