import React from 'react'
import ReactDOM from 'react-dom'
import { ToastProvider } from 'react-toast-notifications'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './index.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById('root')
)
registerServiceWorker()
