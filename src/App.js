import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React, { Suspense } from 'react'
import { createBrowserHistory } from 'history'

import NotFound from './NotFound'
import Test from './pruebas/Test'
import FormTest from './pruebas/FormTest'
import FormTest2 from './pruebas/FormTest2'
import TableTest from './pruebas/TableTest'
import LayoutTest from './pruebas/LayaoutTest'
import MenuVerticalTest from './pruebas/MenuVerticalTest'

export const history = createBrowserHistory()

const App = () => (
  <Suspense fallback="Loading....">
    <Router history={history}>
      <Switch>
        <Route path="/ftest" component={FormTest} exact={true} />
        <Route path="/ftest2" component={FormTest2} exact={true} />
        <Route path="/ttest" component={TableTest} exact={true} />
        <Route path="/layout" component={LayoutTest} exact={true} />
        <Route path="/menuv" component={MenuVerticalTest} exact={true} />
        <Route path="/test" component={Test} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Suspense>

)

export default App