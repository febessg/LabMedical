import { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Input.style';
import {MdVisibility, MdVisibilityOff} from 'react-icons/md';

export const InputComponent = ({label, type, id, placeholder, options, register, error, func, onSubmit, value, justRead}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    };

    return (
        <Styled.InputGroup>
                    <Styled.Label $color={error && 'danger'} htmlFor={id}>{label}</Styled.Label>

                   {type !== 'textarea' && type !== 'select'  &&
                        <Styled.InputContainer>
                            {justRead === true ? 
                                <Styled.Input $color={error && 'danger'}  type={showPassword ? 'text' : type} id={id} placeholder={placeholder} {...register} onBlur={func} onSubmit={onSubmit} value={value} readOnly/> :
                                <Styled.Input $color={error && 'danger'}  type={showPassword ? 'text' : type} id={id} placeholder={placeholder} {...register} onBlur={func} onSubmit={onSubmit} value={value}/>
                            }
                            {type === 'password' &&
                                <Styled.Icon $color={error && 'danger'}  type='button' onClick={handleShowPassword}>
                                    {!showPassword ? <MdVisibility/> : <MdVisibilityOff/>}
                                </Styled.Icon>
                            }
                        </Styled.InputContainer>
                    }

                    {type === 'textarea' &&
                        <Styled.TextArea $color={error && 'danger'}  id={id} placeholder={placeholder} {...register}/>
                    }

                    {type === 'select' &&
                        <Styled.Select $color={error && 'danger'}  id={id} {...register}>
                            <option value="default" selected disabled hidden> </option>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Styled.Select>
                    }
        </Styled.InputGroup>
    )
}

InputComponent.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
    })),
    register: PropTypes.any,
    error: PropTypes.any,
    func: PropTypes.func,
    value: PropTypes.string,
    justRead: PropTypes.bool
}