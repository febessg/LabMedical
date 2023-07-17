import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './global.style.jsx'
import { AuthProvider } from './contexts/auth/auth.context.jsx'
import { ToolbarProvider } from './contexts/Toolbar/Toolbar.context.jsx'
import { UserContext } from './contexts/User/User.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <AuthProvider>
      <UserContext>
        <ToolbarProvider>
          <App />
        </ToolbarProvider>
      </UserContext>
    </AuthProvider>
  </React.StrictMode>,
)
