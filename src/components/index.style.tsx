import styled from 'styled-components';

// BoardList.tsx
export const BoardWrap = styled.div`
  padding: 30px;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
`;

export const BoardList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 15px;
  min-width: 1020px;
  min-height: calc(100vh - 200px);
  background: #fff;
  border-radius: 15px;
`;

// BoardCard.tsx
export const BoardCard = styled.div`
  margin: 10px;
  width: 300px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  padding: 5px;
  border-radius: 5px;
  h2 {
    font-weight: bold;
  }
`;
export const BoardCardList = styled.ul`
  margin-top: 15px;
  min-height: 20px;
`;

export const CreateBtn = styled.button`
  display: flex;
  color: #999;
`;

// BoardCardItem.tsx
export const CardItem = styled.li`
  position: relative;
  padding: 8px 10px 6px 6px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #f9f9f9;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #fcfcfc;
  }
`;

export const ItemTitle = styled.p`
  display: flex;
  align-items: center;
  padding-right: 18px;
  svg {
    flex: none;
    margin-right: 5px;
    color: #999;
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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

export const BoardBox = styled.div`
  background: #fff;
  width: 800px;
  height: 400px;
  padding: 30px;
  border-radius: 10px;
`;

export const FormList = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  span {
    width: 50px;
    flex: none;
  }
  input,
  select,
  textarea {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 5px;

    &:focus {
      outline: 1px solid #4096ff;
    }
  }
  input[type='text'] {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 180px;
    resize: none;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormBtn = styled.div`
  margin-top: 20px;
  text-align: right;
  button {
    margin-left: 10px;
    padding: 4px 15px;
    letter-spacing: 1px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    transition: 0.2s;
    &:hover {
      color: #4096ff;
      border: 1px solid #4096ff;
    }
  }
`;
