import React, { ChangeEvent, useState } from 'react';

export default function BoardCard() {
  const [value, setValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div>
      리스트
      <div>
        <form>
          <input type="text" value={value} onChange={onChangeValue} />
        </form>
      </div>
      <button type="button">+ 새로만들기</button>
    </div>
  );
}
