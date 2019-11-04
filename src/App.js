import React from 'react'
import Routes from '../src/components/Routes'
import { ToastProvider } from 'react-toast-notifications'

import './index.css'

function App() {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>    
  )
}

export default App
