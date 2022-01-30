import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toggle from '../Toggle';

const Container = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    width: 280px;
    margin: 5px;
    & >div:not(:first-child) {
        border-top: 1px grey solid;
    }
`;

const ToggleGroup = ({toggles, onChange, values, title}) => (
    <div>
        <h2>{title}</h2>
        <Container>
            {toggles.map((toggle, idx) => (
                <Toggle
                    key={idx}
                    toggle={toggle}
                    onChange={onChange}
                    value={values[toggle.name]}
                    type="group"
                />
            ))}
        </Container>
    </div>
);

ToggleGroup.propTypes = {
    toggles: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
}

export default ToggleGroup;
