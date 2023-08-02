import { LocalStorageService } from "../LocalStorage.service";

const Get = () => {
    return LocalStorageService.get('exams');
};

const Create = (data) => {
    const exams = Get();
    data = {
        id: exams.length + 1,
        ...data
    }
    LocalStorageService.set('exams', [...exams, data]);
};

const Show = (id) => {
    return Get().find(exam => exam.id == id)
};

const ShowByPatientId = (id) => {
    return Get().filter(exam => exam.patientId === id)
};

const ShowByPatientName = (name = '') => {
    return Get().filter(exam => exam.patientName.includes(name))
};

const Delete = (id) => {
    LocalStorageService.set('exams', Get().filter(exam => exam.id !== id));
 };

 const Update = (id, data) => {
    const exams = Get();
    exams[exams.find(exam => exam.id === id).indexOf] = data;
    LocalStorageService.set('exams', exams)
};

export const ExamsService = {
    Get,
    Create,
    Show,
    ShowByPatientId,
    ShowByPatientName,
    Delete,
    Update
};