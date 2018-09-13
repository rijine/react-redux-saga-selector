import { ADD_ARTICLE, CHANGE_FILTER } from './action-types';

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const changeFilter = newFilter => ({
  type: CHANGE_FILTER,
  payload: newFilter
});
