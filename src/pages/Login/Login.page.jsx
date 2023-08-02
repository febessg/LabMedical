import { FormLoginComponent } from "../../components/Form/Login/Login.component";
import * as Styled from './Login.style';
import logo from '../../assets/Logo-big.png';

export const LoginPage = () => {
    return (
        <Styled.Login>
        <Styled.LogoContainer>
            <Styled.Logo src={logo} alt="Logo LabMedical" />
        </Styled.LogoContainer>
        <FormLoginComponent/>
        </Styled.Login>
    )
}