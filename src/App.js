import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React, { Suspense } from 'react'
import { createBrowserHistory } from 'history'

import NotFound from './NotFound'
import Test from './pruebas/Test'

export const history = createBrowserHistory()

const App = () => (
  <Suspense fallback="Loading....">
    <Router history={history}>
      <Switch>
        <Route path="/test" component={Test} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Suspense>

)

export default App