import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactToggle from 'react-toggle';
import 'react-toggle/style.css';

const Container = styled.div`
    ${props => props.type === 'single' && `
        border: 1px solid #000;
        border-radius: 4px;
        width: 280px;
        margin: 5px;
    `}
`;

const ToggleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.type === 'child' ? '10px 24px' : '20px'};  
`;

const Toggle = ({toggle, value, onChange, type }) => {
    const handleChildChange = (name, checked) => {
        onChange(toggle.name, {...value, [name]: checked});
    };
    return (
        <Container type={type}>
            <ToggleRow type={type}>
                <div>{toggle.label}</div>
                {/* TODO add optional dropdown/input */}
                <label>
                    <ReactToggle name={toggle.name} checked={!!value}
                                 onChange={e => onChange(toggle.name, e.target.checked)}/>
                </label>
            </ToggleRow>
            {value && toggle.subToggles?.map((subToggle, key) => (
                <Toggle key={key} toggle={subToggle} onChange={handleChildChange} value={value?.[subToggle.name]} type="child" />
            ))}
        </Container>
    );
};

Toggle.propTypes = {
    toggle: PropTypes.object.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['single', 'group', 'child'])
};

Toggle.defaultProps = {
    value: false,
    type: 'single'
};

export default Toggle;
