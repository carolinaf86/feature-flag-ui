import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toggle from '../Toggle';
import ToggleGroup from '../ToggleGroup';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const FieldContainer = styled.div`
    
`;

const Form = ({schema, initialData}) => {

    const [values, setValues] = useState(initialData);

    const handleChange = (fieldName, value) => {
        setValues({...values, [fieldName]: value});
    }

    useEffect(() => {
        console.log('Values', values);
    }, [values]);

    return (
        <form>
            <Container>
                {schema.map((field, idx) => (
                    <FieldContainer key={idx}>
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
                        {field.type === 'title' && (<h2>{field.label}</h2>)}
                    </FieldContainer>
                ))}
            </Container>
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
