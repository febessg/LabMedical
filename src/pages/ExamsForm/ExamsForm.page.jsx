import { useContext, useEffect } from "react";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import { useParams } from "react-router-dom";
import { PatientService } from "../../services/Patient/Patient.service";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { FormExamsComponent } from "../../components/Form/Exams/Exams.component";

export const ExamsFormPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        const newToolbar = {
          title: 'Cadastro de Exame',
          userName: user.name
        };
        setToolbar(newToolbar);
      }, [user.name]);

      const {id} = useParams();
      const patient = PatientService.Show(id);

    return (
        <>
            <ToolbarComponent/>
            <FormExamsComponent patient={patient}/>
        </>
    )
}