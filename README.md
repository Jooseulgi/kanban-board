## Kanban-Board

## 프로젝트 개요

kanban board 스타일의 CRUD 구현 및 Drag & Drop 이벤트 활용

<br/>

## 배포 링크

[배포 바로가기](https://kanban-board-jooseulgi.vercel.app/)

<br/>

## 구현 화면

### 1) Kanban-Board CRUD

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217709801-6845b646-1f82-43df-84b3-f8f32cd56244.gif">

- 이슈 목록 추가, 수정, 상세보기 기능 구현
- `recoil`을 사용해 [이슈에 대한 상태 저장](https://github.com/Jooseulgi/kanban-board/tree/master/src/recoil)
  - `cardItemState`로 전체 이슈 관리
  - `detailIdState`로 해당 이슈 id 값 관리
- `TASK` 배열 안에 "할일", "진행 중", "완료" 객체를 만들어 이슈에 맞게 필터링 된 배열을 map하여 [각 이슈 목록 생성](https://github.com/Jooseulgi/kanban-board/blob/master/src/components/BoardList.tsx)
- `detailIdState`에 저장 된 id값과 이슈의 id값이 같으면 [상세보기 노출](https://github.com/Jooseulgi/kanban-board/blob/master/src/components/BoardList.tsx)

### 2) Drag & Drop

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217711433-9d0aaa88-ac78-4f99-9d59-74653f28fd35.gif">

- custom hook을 사용해서 [Darg & Drop 이벤트를 처리](https://github.com/Jooseulgi/kanban-board/blob/master/src/hooks/useDragAndDrop.ts)
- drag 할 때 요소의 id값을 set하고 drop할 때 `handleUpdateList()` 함수를 호출 해 다른 이슈 목록에 놓였을 때 상태 업데이트

### 3) localstroage 저장

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217711923-6a6ac3cf-a2b4-4d7e-9234-98a7f653e749.gif">

- `reoil`에 effects 옵션을 사용해 [로컬 스토리지에 저장](https://github.com/Jooseulgi/kanban-board/blob/master/src/recoil/cardItem.ts)
- `cardItemState`가 변경 될 때 마다 [`localStorageEffect` 이벤트 실행](https://github.com/Jooseulgi/kanban-board/blob/master/src/util/localstorage.ts)

<br/>

## 과제 요구사항

### 1) 범위

- 이슈 목록 보기 기능
- 이슈 추가 기능
- 이슈 상세 보기 기능
- 이슈 정보 수정 기능

### 2) 요구사항

<details>
<summary>구현 사항</summary>

- 각 이슈는 CRUD(생성, 표출, 수정, 삭제)가 적용되어야 한다.
- 이슈는 각각 **고유번호, 제목, 내용, 마감일, 상태, 담당자**가 존재한다.
- 이슈의 상태는 **“할 일”, “진행 중”, 완료”**가 존재하며 칸반보드와 같이 상태별로 분류된다
- 이슈의 작성 폼에서는 **제목, 내용, 마감일, 상태, 담당자**를 입력할 수 있다.
  - 제목은 `<input type=”text”>` 태그를 사용한다.
  - 내용은 `<textarea>` 태그를 사용한다.
  - 마감일은 `<input type=”datetime-local”>` 태그를 사용한다.
  - 담당자 선택은 아래의 방식으로 이루어진다.
    - 사전에 임의의 담당자 목록을 구성한다.
    - `<input type=”text”>` 태그를 이용해 담당자를 검색한다.
    - 검색을 수행하면 검색결과 값이 노출되며 그 중 하나를 선택해서 담당자를 지정한다.
- 각 이슈를 클릭 시 상세정보 창이 표시된다.
  - 상세정보 창에는 **“저장”**버튼이 존재한다.
  - 상세정보창에서는 이슈의 각 정보를 수정할 수 있으며, **“저장”**버튼을 클릭 시 수정한 내용이 반영된다.
- 이슈 상태별 목록은 기본적으로 고유번호 순서대로 오름차순 정렬한다.
- 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다. 변경된 순서는 고유번호순 정렬보다 우선해서 적용된다.
- 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 상태를 변경할 수 있다.
</details>

<details>
<summary>구현 조건</summary>

- 데이터가 로딩중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려해야 하며, 로딩 중에는 액션이 발생하는 것을 방지해야한다.
- 각 기능들은 실수로 인한 중복 액션을 방지하기 위해 실행 후 0.5초의 딜레이를 적용한다.
- 데이터는 새로고침해도 유지될 수 있도록 관리한다.
- 에러 상황을 고려해서 처리할 시 가산점이 부여됩니다.
</details>

<br/>

## 실행 방법

```bash
$ git clone https://github.com/Jooseulgi/kanban-board.git
$ cd kanban-board
$ npm install
$ npm start
```

<br/>

## 사용 기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Recoil](https://img.shields.io/badge/Recoil-5A29E4?style=for-the-badge&logo=&logoColor=white) ![Styled-Components](https://img.shields.io/badge/Styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) <br/>

- <b>TypeScript</b>
  - 컴파일 단계에서 오류 확인이 가능해 코드의 안정성을 주고 type 학습을 위해 선택했다.
- <b>Recoil</b>
  - 비동기 처리까진 필요없는 프로젝트라 redux에 비해 recoil이 상태 관리에 편할 것 같아 선택했다.
- <b>Styled-Components</b>
  - 'CSS IN JS' 방식으로 원하는 스타일이 가능하고 style 요소가 많지 않은 프로젝트라 한 파일에서 관리하기 쉬운 Styled-Components를 선택했다.

<br/>

## 폴더 구조

```bash
redux-comment
├─ 📁 public
├─ 📁 src
│  ├─ 📁 components  # kanban board 관련 components가 모여있는 폴더입니다.
│  ├─ 📁 hooks  # drag&drop custom hook이 있는 폴더입니다.
│  ├─ 📁 recoil  # 전역 상태 관리 폴더입니다.
│  ├─ 📁 types  # 타입 선언 폴더입니다.
│  ├─ 📁 util  # 상수 선언과 localstorage 관련 파일이 있는 폴더입니다.
│  ├─ index.css
│  └─ index.tsx
├─ ⚙️ .eslintrc.json
├─ ⚙️ .gitignore
├─ ⚙️ .prettierrc.json
├─ ⚙️ package-lock.json
├─ ⚙️ package.json
├─  README.md
└─  ⚙️ tsconfig.json
```

<br/>

## 개선할 점

- 자료구조 설계
  - drag & drop을 구현하다 처음에 설계한 구조가 잘못됐다는 걸 알았다. 처음 설계한 Task 배열에서 각 목록의 이슈들을 담을 빈 배열이 필요했다. 그래야 이슈를 darg 하고 drop 했을 때 해당 목록의 배열에서 정렬을 할 수 있었다. 지금은 빈 배열이 없어 전체 리스트로 정렬 하려고 하니 쉽게 구현되지 않았다. 이 부분은 추후 다시 작업할 예정이다.
- drag & drap 이벤트
  - 구현할 때 `e.dataTransfer.getData`를 활용해 작업했는데 `useRef`의 current로 구현할 수 있다는 걸 알게 되었다. 리팩토링할 때 이 부분을 활용해 봐야 할 것 같다.
