import { useParams } from "react-router-dom"
import { FormAppointmentComponent } from "../../components/Form/Appointment/Appointment.component"
import { PatientService } from "../../services/Patient/Patient.service";

export const AppointmentsFormPage = () => {
    const {id} = useParams();

    const patient = PatientService.Show(id);

    return (
        <>
            <FormAppointmentComponent patient={patient.fullName}/>
        </>
    )
}