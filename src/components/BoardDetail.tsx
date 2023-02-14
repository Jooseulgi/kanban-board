import { ChangeEvent, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cardItemState } from '../recoil/cardItem';
import { detailIdState } from '../recoil/detail';
import { CardItemType } from '../types';
import { TASK } from '../util/constants';
import * as S from './index.style';

interface Props {
  item: CardItemType;
}

export default function BoardDetail({ item }: Props) {
  const { id, title, date, state, manager, content } = item;
  const [card, setCard] = useRecoilState(cardItemState);
  const setDetailShow = useSetRecoilState(detailIdState);

  const [value, setValue] = useState({
    title,
    date,
    state,
    manager,
    content,
  });

  const handleChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    k: string,
  ) => {
    setValue({ ...value, [k]: e.target.value });
  };

  const handleSubmit = () => {
    const newCard = card.map(el => (el.id === id ? { id, ...value } : el));
    setCard(newCard);
    setDetailShow('');
  };

  if (!id) return <div />;
  return (
    <S.BoardDetail>
      <S.BoardBox>
        <S.FormList>
          <span>제목</span>
          <input
            type="text"
            value={value.title}
            onChange={e => {
              handleChangeValue(e, 'title');
            }}
          />
        </S.FormList>
        <S.FlexBox>
          <S.FormList>
            <span>마감일</span>
            <input
              type="datetime-local"
              value={value.date}
              onChange={e => {
                handleChangeValue(e, 'date');
              }}
            />
          </S.FormList>
          <S.FormList>
            <span>상태</span>
            <select
              onChange={e => {
                handleChangeValue(e, 'state');
              }}
              defaultValue={state}
            >
              {TASK.map(v => (
                <option label={v.task} key={v.id}>
                  {v.task}
                </option>
              ))}
            </select>
          </S.FormList>
          <S.FormList>
            <span>담당자</span>
            <input
              type="text"
              value={value.manager}
              onChange={e => {
                handleChangeValue(e, 'manager');
              }}
            />
          </S.FormList>
        </S.FlexBox>
        <S.FormList>
          <span>내용</span>
          <textarea
            name=""
            id=""
            value={value.content}
            onChange={e => {
              handleChangeValue(e, 'content');
            }}
          />
        </S.FormList>
        <S.FormBtn>
          <button type="button" onClick={handleSubmit}>
            저장
          </button>
          <button type="button" onClick={() => setDetailShow('')}>
            닫기
          </button>
        </S.FormBtn>
      </S.BoardBox>
    </S.BoardDetail>
  );
}
