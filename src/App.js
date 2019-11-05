import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

// import Routes from '../src/components/Routes'

import TopNavigation from './components/topNavigation'
import SideNavigation from './components/sideNavigation'
import Footer from './components/Footer'
import './index.css'

import Login from './components/pages/Login'
import DashboardPage from './components/pages/DashboardPage'
import ProfilePage from './components/pages/ProfilePage'
import TablesPage from './components/pages/TablesPage'
import MapsPage from './components/pages/MapsPage'
import NotFoundPage from './components/pages/NotFoundPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <div className="flexible-content">
            <TopNavigation />
            <SideNavigation />
            <main id="content" className="p-5">
              <Route path='/dashboard' component={DashboardPage} />
              <Route path='/profile' component={ProfilePage} />
              <Route path='/tables' component={TablesPage} />
              <Route path='/maps' component={MapsPage} />
            </main>
            <Footer />
          </div>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
