import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactToggle from 'react-toggle';
import 'react-toggle/style.css';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const Toggle = ({ label, checked, onChange, additionalInput }) => {
    return (
        <Container>
            <div>{label}</div>
            {additionalInput && (additionalInput)}
            <label>
                <ReactToggle checked={checked} onChange={e => onChange(e.target.checked)}/>
            </label>
        </Container>
    );
};

Toggle.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    additionalInput: PropTypes.element
};

Toggle.defaultProps = {
    additionalInput: null
};

export default Toggle;
