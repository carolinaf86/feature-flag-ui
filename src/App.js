import React from 'react';
import styled from 'styled-components';
import './App.css';
import Form from './components/Form';
import schema from './schema.json';
import initialData from './initialData.json';

const Container = styled.div`
    margin: auto;
    width: 500px;
`;

function App() {
    return (
        <Container className="App">
            <Form schema={schema} initialData={initialData} />
        </Container>
    );
}

export default App;
