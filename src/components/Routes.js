import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'

import DashboardPage from './pages/DashboardPage'
import ProfilePage from './pages/ProfilePage'
import TablesPage from './pages/TablesPage'
import MapsPage from './pages/MapsPage'
import NotFoundPage from './pages/NotFoundPage'

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/tables' component={TablesPage} />
          <Route path='/maps' component={MapsPage} />
          <Route path='/404' component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Routes

/*
const Login = React.lazy(() => import('./pages/login'))
// const Home = React.lazy(() => import('./pages/home'))

const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const TablesPage = React.lazy(() => import('./pages/TablesPage'))
const MapsPage = React.lazy(() => import('./pages/MapsPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: DashboardPage },
  { path: '/profile', exact: true, name: 'Profile', component: ProfilePage },
  { path: '/tables', exact: true, name: 'Tables', component: TablesPage },
  { path: '/maps', exact: true, name: 'Maps', component: MapsPage },
  { path: '/404', exact: true, name: '404', component: NotFoundPage },
]

export default routes
*/