import React from 'react'

import TopNavigation from '../../topNavigation'
import SideNavigation from '../../sideNavigation'
import Footer from '../../Footer'
import './index.css'

export default function Main({ history, props }) {

  return (
    <div className="flexible-content">
      <TopNavigation />
      <SideNavigation />
      <Footer />
    </div>
  )
}
