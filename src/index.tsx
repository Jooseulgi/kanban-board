import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BoardList from './components/BoardList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BoardList />
  </React.StrictMode>,
);
