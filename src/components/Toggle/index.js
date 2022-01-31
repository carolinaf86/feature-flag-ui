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

const ToggleRow = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.type === 'child' ? '10px 24px' : '20px'};  
`;

const Toggle = ({toggle, value, onChange, type}) => {
    const handleChildChange = (name, checked) => {
        // If no subToggles are checked, set the parent value to true, otherwise update child key value
        const numSubTogglesChecked = Object.values(value).filter(v => !!v).length;
        onChange(toggle.name, !checked && numSubTogglesChecked === 1 ? true : {...value, [name]: checked});
    };
    return (
        <Container type={type}>
            <ToggleRow type={type}>
                {/* TODO add optional dropdown/input */}
                    {toggle.label}
                    <ReactToggle name={toggle.name}
                                 checked={!!value}
                                 onChange={e => onChange(toggle.name, e.target.checked)}/>
            </ToggleRow>
            {value && toggle.subToggles?.map((subToggle, key) => (
                <Toggle key={key} toggle={subToggle} onChange={handleChildChange} value={value?.[subToggle.name]}
                        type="child"/>
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
