import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/Login/Login.page"
import { HomePage } from "./pages/Home/Home.page"
import { LocalStorageService } from "./services/User/LocalStorage.service"
import { SignUpPage } from "./pages/SignUp/SignUp.page"

if (!LocalStorageService.get('users')) {
  LocalStorageService.set('users', [
    {
        id: 1,
        email: 'admin@labmedical.com',
        password: '12345678'
    },
    {
        id: 2,
        email: 'usuario@labmedical.com',
        password: '12345678'
    }
]
)
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="*" element={<><p>Página não existe</p></>}/>
      </Routes>
    </Router>
  )
}

export default App
