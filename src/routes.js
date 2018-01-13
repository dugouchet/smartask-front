import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Component from './index';
import AddTodo from './containers/AddTodo';

export default (
    <Route key={'/'} path="/todo" component={Component}>
        <IndexRoute component={AddTodo} />
    </Route>
);
