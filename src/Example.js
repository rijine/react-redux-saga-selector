import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle, changeFilter } from './actions';
import Axios from 'axios';
import { getFilteredArticles, getArticlesFilteredByKeyword } from './selectors';

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    changeFilter: newFilter => dispatch(changeFilter(newFilter))
  };
};

const mapStateToProps = (state, props) => {
  return {
    // articles: getArticlesFilteredByKeyword(state.article, props.keyword),
    articles: getFilteredArticles(state.article),
    visibility: state.article.visibility
  };
};

class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        { id: 1, title: 'Angular vs React' },
        { id: 2, title: 'React vs Vue' }
      ],
      posts: []
    };
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res);
      this.setState({ posts: res.data });
    });
  }

  add() {
    const ran = Math.random();
    this.props.addArticle({
      id: this.props.articles.length + 1,
      title: ran + '',
      visible: true
    });
  }

  switchFilter() {
    const { visibility } = this.props;
    console.log(visibility);
    if (this.props.visibility === 'SHOW_ALL') {
      this.props.changeFilter('SHOW_TRUE');
    } else if (this.props.visibility === 'SHOW_TRUE') {
      this.props.changeFilter('SHOW_FALSE');
    } else {
      this.props.changeFilter('SHOW_ALL');
    }
  }

  render() {
    const { articles, visibility } = this.props;
    return (
      <div>
        <button onClick={this.add.bind(this)}>Click Me</button>
        <button onClick={this.switchFilter.bind(this)}>{visibility}</button>
        <ul>
          {articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
        Posts
        <ul>
          {this.state.posts.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export const Example = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
