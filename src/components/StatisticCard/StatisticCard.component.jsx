import * as Styled from './StatisticCard.style';
import PropTypes from 'prop-types';

export const StatisticCardComponent = ({icon, value, title}) => {

    return (
        <Styled.StatisticCard>
        <Styled.Container>
            <Styled.Icon>{icon}</Styled.Icon>
            <Styled.Value>{value}</Styled.Value>
        </Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        </Styled.StatisticCard>
    )
}

StatisticCardComponent.propTypes = {
    icon: PropTypes.any.isRequired,
    value: PropTypes.number,
    title: PropTypes.string.isRequired
}