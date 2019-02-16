import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import PostList from './posts/PostList';
import PostCreate from './posts/PostCreate';
import Header from './Header';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <div>
          <Header />
          <div className="ui container">
            <Route path='/' exact component={PostList} />
            <Route path='/posts/create' exact component={PostCreate} />
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default App;