import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return(
    <div className='ERROR'>
      <h1>REFRESHEA LA PAGINA</h1>
      <h2>Se cometio un error de logica en la <u>Escritura</u></h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
