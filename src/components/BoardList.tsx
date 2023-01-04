import { useRecoilValue } from 'recoil';
import { cardItemState } from '../recoil/cardItem';
import { detailState } from '../recoil/detail';
import { TASK } from '../util/constants';
import BoardCard from './BoardCard';
import BoardCardItem from './BoardCardItem';
import BoardDetail from './BoardDetail';
import * as S from './index.style';

export default function BoardList() {
  const card = useRecoilValue(cardItemState);
  const detailShow = useRecoilValue(detailState);
  const taskFilter = (task: string) => {
    const filteredCard = card
      .filter(data => data.state === task)
      .map(item => <BoardCardItem key={item.id} item={item} />);
    return filteredCard;
  };
  return (
    <S.BoardList>
      {TASK?.map(item => (
        <BoardCard key={item.id} taskType={item.task}>
          {taskFilter(item.task)}
        </BoardCard>
      ))}
      {card.map(
        item =>
          item.id === detailShow.id && (
            <BoardDetail key={item.id} item={item} />
          ),
      )}
    </S.BoardList>
  );
}
