import { LocalStorageService } from "../LocalStorage.service";

const Get = () => {
    return LocalStorageService.get('patients');
};

const Create = (data) => {
    const patients = Get();
    data = {
        id: patients.length + 1,
        ...data
    }
    LocalStorageService.set('patients', [...patients, data]);
};

const Show = (id) => {
    return Get().find(patient => patient.id === id)
};

const ShowByEmail = (email) => {
    return Get().find(patient => patient.email === email)
};

const ShowByPhoneNumber = (phoneNumber) => {
    return Get().find(patient => patient.phoneNumber === phoneNumber)
};

const ShowByName = (name) => {
    return Get().find(patient => patient.fullName === name)
}

const ShowByCpf = (cpf) => {
    return Get().find(patient => patient.cpf === cpf)
}

const Delete = (id) => {
    LocalStorageService.set('patients', Get().filter(patient => patient.id !== id));
 };

 const Update = (id, data) => {
    const patients = Get();
    patients[patients.find(patient => patient.id === id).indexOf] = data;
    LocalStorageService.set('patients', patients)
};

export const PatientService = {
    Get,
    Create,
    Show,
    ShowByEmail,
    ShowByPhoneNumber,
    ShowByName,
    ShowByCpf,
    Delete,
    Update
};