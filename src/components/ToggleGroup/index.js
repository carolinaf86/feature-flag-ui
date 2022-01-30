import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Toggle';

const ToggleGroup = ({toggles, onChange, values, title}) => {
    // TODO do not allow type toggleGroup in toggles
    return (
        <div>
            <h2>{title}</h2>
            {toggles.map((toggle, idx) => (
                <div key={idx}>
                    <Toggle toggle={toggle}
                            onChange={onChange}
                            value={values[toggle.name]}
                    />
                </div>
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
