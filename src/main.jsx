import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './global.style.jsx'
import { AuthProvider } from './contexts/auth/auth.context.jsx'
import { ToolbarProvider } from './contexts/Toolbar/Toolbar.context.jsx'
import { UserProvider } from './contexts/User/User.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <AuthProvider>
      <UserProvider>
        <ToolbarProvider>
          <App />
        </ToolbarProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
)
