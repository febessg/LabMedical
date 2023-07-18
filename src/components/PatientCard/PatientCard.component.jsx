import {BsPersonSquare} from 'react-icons/bs';
import PropTypes from 'prop-types';

export const PatientCardComponent = ({name, age, contact, healthInsurance}) => {
    return (
        <div className='patient-card'>
            <span><BsPersonSquare/></span>
            <div className="PatientInfo">
                <h2>{name}</h2>
                <h4>{age}</h4>
                <h2>{contact}</h2>
                <h2>{healthInsurance}</h2>
            </div>
            <button>Ver mais</button>
        </div>
    )
}

PatientCardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    contact: PropTypes.string.isRequired,
    healthInsurance: PropTypes.string
}