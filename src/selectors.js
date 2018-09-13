import { createSelector } from 'reselect';

const getVisibilityFilter = state => state.visibility;
const getArticles = state => state.articles;

export const getFilteredArticles = createSelector(
  [getArticles, getVisibilityFilter],
  (articles, visibility) => {
    switch (visibility) {
      case 'SHOW_ALL':
        return articles;
      case 'SHOW_FALSE':
        return articles.filter(t => t.visible);
      case 'SHOW_TRUE':
        return articles.filter(t => !t.visible);
    }
  }
);

export const getArticlesFilteredByKeyword = createSelector(
  [getFilteredArticles, state => state.keyword],
  (filteredArticles, keyword) =>
    filteredArticles.filter(article => article.title.indexOf(keyword) >-1 )
);
