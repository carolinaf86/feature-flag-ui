import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactToggle from 'react-toggle';
import 'react-toggle/style.css';

const Container = styled.div`
   
`;

const ToggleRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const Toggle = ({ toggle, value, onChange, additionalInput }) => {
    const handleChildChange = (name, checked) => {
        onChange(toggle.name, { ...value, [name]: checked });
    };
    return (
        <Container>
            <ToggleRow>
                <div>{toggle.label}</div>
                {additionalInput && (additionalInput)}
                <label>
                    <ReactToggle name={toggle.name} checked={!!value} onChange={e => onChange(toggle.name, e.target.checked)}/>
                </label>
            </ToggleRow>
            {value && toggle.subToggles?.map((subToggle, key) => (
                <Toggle key={key} toggle={subToggle} onChange={handleChildChange} value={value?.[subToggle.name]} />
            ))}
        </Container>
    );
};

Toggle.propTypes = {
    toggle: PropTypes.object.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onChange: PropTypes.func.isRequired,
    additionalInput: PropTypes.element
};

Toggle.defaultProps = {
    additionalInput: null,
    value: false
};

export default Toggle;
