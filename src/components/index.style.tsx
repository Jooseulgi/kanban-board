import styled from 'styled-components';

// BoardList.tsx
export const BoardList = styled.div`
  display: flex;
`;

// BoardCard.tsx
export const CreateBtn = styled.button`
  display: flex;
  margin-top: 10px;
  color: #999;
`;

export const BoardCard = styled.div`
  margin: 10px 30px;
  min-width: 260px;
`;

// BoardCardItem.tsx
export const CardItem = styled.li`
  position: relative;
  padding: 8px 10px 6px 6px;
  margin: 10px 0;
  width: 260px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #f9f9f9;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #fcfcfc;
  }
`;

export const ModifyBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #aaa;
  button {
    color: #aaa;
  }
`;

// BoardDetail.tsx
export const BoardDetail = styled.div`
  min-width: 430px;
`;
export const DetailForm = styled.div`
  > div {
    margin: 5px;
  }
`;
