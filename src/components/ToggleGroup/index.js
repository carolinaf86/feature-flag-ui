import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Toggle';

const ToggleGroup = ({ toggles, onChange, values, title }) => {
    // TODO do not allow type toggleGroup in toggles
    return (
        <div>
            <h2>{title}</h2>
            {toggles.map((field, idx) => (
                <Toggle key={idx} label={field.label} onChange={(checked) => onChange(field.name, checked)} checked={!!values[field.name]} />
            ))}
        </div>
    )
};

ToggleGroup.propTypes = {
    toggles: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
}

export default ToggleGroup;
