import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/Login/Login.page"
import { HomePage } from "./pages/Home/Home.page"
import { LocalStorageService } from "./services/User/LocalStorage.service"
import { SignUpPage } from "./pages/SignUp/SignUp.page"
import { PatientRegisterPage } from "./pages/PatientRegister/PatientRegister.page"
import { AppointmentsPage } from "./pages/Appointments/Appointments.page"
import { ExamsPage } from "./pages/Exams/Exams.page"
import { ListPatientPage } from "./pages/ListPatient/ListPatient.page"
import { MedicalRecordPage } from "./pages/MedicalRecord/MedicalRecord.page"

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
        <Route path="/patient-register" element={<PatientRegisterPage/>}/>
        <Route path="/appointments" element={<AppointmentsPage/>}/>
        <Route path="/exams" element={<ExamsPage/>}/>
        <Route path="/list-patients" element={<ListPatientPage/>}/>
        <Route path="/medical-record" element={<MedicalRecordPage/>}/>
        <Route path="*" element={<><p>Página não existe</p></>}/>
      </Routes>
    </Router>
  )
}

export default App
