import { ADD_ARTICLE, CHANGE_FILTER } from './action-types';
import { combineReducers } from '../../../../Library/Caches/typescript/3.0/node_modules/redux';

const initialState = {
  articles: [{ id: 1, title: 'Spring vs Play', visible: false }],
  visibility: 'SHOW_ALL'
};
export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // return { ...state, articles: state.articles.concat(action.payload) };
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    case CHANGE_FILTER:
      return {
        ...state,
        visibility: action.payload
      };
    default:
      return state;
  }
};

export function counterReducer(state = 0, action) {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  article: articleReducer,
  counter: counterReducer
});
