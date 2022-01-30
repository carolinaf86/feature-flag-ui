import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toggle from '../Toggle';
import ToggleGroup from '../ToggleGroup';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0;
`;

const Title = styled.h2`
    width: 100%
`;

const Form = ({schema, initialData}) => {

    const [values, setValues] = useState(initialData);

    const handleChange = (fieldName, value) => {
        setValues({...values, [fieldName]: value});
    }

    return (
        <form>
            <Container>
                {schema.map((field, idx) => (
                    <Fragment key={idx}>
                        {field.type === 'toggle' && (
                            <Toggle toggle={field}
                                    onChange={handleChange}
                                    value={!!values[field.name]}/>
                        )}
                        {field.type === 'toggleGroup' && (
                            <ToggleGroup toggles={field.toggles}
                                         onChange={handleChange}
                                         values={values}
                                         title={field.title}/>
                        )}
                        {field.type === 'title' && (<Title>{field.label}</Title>)}
                    </Fragment>
                ))}
            </Container>
            <p>{JSON.stringify(values)}</p>
        </form>
    )
};

Form.propTypes = {
    schema: PropTypes.array.isRequired,
    initialData: PropTypes.object
};

Form.defaultProps = {
    initialData: {}
}

export default Form;
