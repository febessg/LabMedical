import { FormSignUpComponent } from "../../components/Form/SignUp/SignUp.component";
import * as Styled from './SignUp.style';
import logo from '../../assets/Logo-big.jpg';

export const SignUpPage = () => {
    return(
        <Styled.SignUp>
        <Styled.LogoContainer>
            <Styled.Logo src={logo} alt="Logo LabMedical" />
        </Styled.LogoContainer>
        <FormSignUpComponent/>
        </Styled.SignUp>
    )
}