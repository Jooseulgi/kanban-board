import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { cardItemState } from '../recoil/cardItem';
import * as S from './index.style';

interface Props {
  taskType: string;
  children: any;
}

export default function BoardCard({ taskType, children }: Props) {
  const setCard = useSetRecoilState(cardItemState);

  const onCreateCard = () => {
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

  return (
    <S.BoardCard>
      <p>{taskType}</p>
      <ul>{children}</ul>
      <S.CreateBtn onClick={onCreateCard}>+ 새로 만들기</S.CreateBtn>
    </S.BoardCard>
  );
}
