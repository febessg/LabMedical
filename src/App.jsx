import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/Login/Login.page"
import { HomePage } from "./pages/Home/Home.page"
import { LocalStorageService } from "./services/LocalStorage.service"
import { SignUpPage } from "./pages/SignUp/SignUp.page"
import { PatientRegisterPage } from "./pages/PatientRegister/PatientRegister.page"
import { AppointmentsPage } from "./pages/Appointments/Appointments.page"
import { ExamsPage } from "./pages/Exams/Exams.page"
import { ListPatientPage } from "./pages/ListPatient/ListPatient.page"
import { MedicalRecordPage } from "./pages/MedicalRecord/MedicalRecord.page"
import { AppointmentsFormPage } from "./pages/AppointmentsForm/AppointmentsForm.page"

if (!LocalStorageService.get('users')) {
  LocalStorageService.set('users', [
    {
        id: 1,
        name: 'Administrador',
        email: 'admin@labmedical.com',
        password: '12345678'
    },
    {
        id: 2,
        name: 'Usuário',
        email: 'usuario@labmedical.com',
        password: '12345678'
    }
]
)
}

if (!LocalStorageService.get('patients')) {
  LocalStorageService.set('patients', [
    {
        id: 1,
        gender: 'Feminino',
        fullName: 'Jane Doe',
        birthDate: '1997-09-07',
        cpf: '777.777.777-77',
        rg: '0937738',
        maritalStatus: 'Casado',
        email: 'janedoe@labmedical.com',
        phoneNumber: '(99) 9 9999-9999',
        naturality: 'Brasileira',
        emergencyContact: '(99) 9 9999-9999'
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
        <Route path="/appointments/:id" element={<AppointmentsFormPage/>}/>
        <Route path="/exams" element={<ExamsPage/>}/>
        <Route path="/list-patients" element={<ListPatientPage/>}/>
        <Route path="/medical-record" element={<MedicalRecordPage/>}/>
        <Route path="*" element={<><p>Página não existe</p></>}/>
      </Routes>
    </Router>
  )
}

export default App
