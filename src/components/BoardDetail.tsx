// import { ChangeEvent, useState } from 'react';
import { CardItemType } from '../types';
import { TASK } from '../util/constants';
import * as S from './index.style';

interface Props {
  item: CardItemType;
}

export default function BoardDetail({ item }: Props) {
  //   const [card, setCard] = useRecoilState(cardItemState);
  //   const [detailShow, setDetailShow] = useRecoilState(detailState);
  // const handleDetailClose = (id: string) => {
  //   setDetailShow({ id });
  // };

  //   const [value, setValue] = useState({
  //     [item.title]: '',
  //     [item.content]: '',
  //   });

  //   const onChangeValue = (k: string, v: string) => {
  //     setValue({ ...value, [k]: v });
  //   };

  return (
    <S.BoardDetail>
      <S.DetailForm>
        <div>
          제목: <input type="text" value={item.title} />
        </div>
        <div>고유번호 : {item.id}</div>
        <div>
          <input type="datetime-local" value={item.date} />
        </div>
        <div>
          상태 :
          <select>
            {TASK.map(v => (
              <option label={v.task} key={v.id} value={item.state} />
            ))}
          </select>
        </div>
        <div>담당자 : </div>
        <div>
          내용 : <textarea name="" id="" />
        </div>
      </S.DetailForm>
      <div>
        <button type="button">저장</button>
        <button type="button">닫기</button>
      </div>
    </S.BoardDetail>
  );
}
