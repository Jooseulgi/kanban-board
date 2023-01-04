import { atom } from 'recoil';
import { CardItemType } from '../types';

export const cardItemState = atom<CardItemType[]>({
  key: '#cardItemState',
  default: [],
});
