import { LocalStorageService } from "../LocalStorage.service";

const Get = () => {
    return LocalStorageService.get('appointments');
};

const Create = (data) => {
    const appointments = Get();
    data = {
        id: appointments.length + 1,
        ...data
    }
    LocalStorageService.set('appointments', [...appointments, data]);
};

const Show = (id) => {
    return Get().find(appointment => appointment.id == id)
};

const ShowByPatientId = (id) => {
    return Get().filter(appointment => appointment.patientId === id)
};

const ShowByPatientName = (name = '') => {
    return Get().filter(appointment => appointment.patientName.includes(name))
};

const Delete = (id) => {
    LocalStorageService.set('appointments', Get().filter(appointment => appointment.id !== id));
 };

const Update = (id, data) => {
    const appointments = Get();
    appointments[appointments.find(appointment => appointment.id === id).indexOf] = data;
    LocalStorageService.set('appointments', appointments)
};

export const AppointmentService = {
    Get,
    Create,
    Show,
    ShowByPatientId,
    ShowByPatientName,
    Delete,
    Update
};