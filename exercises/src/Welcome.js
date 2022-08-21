import React from 'react';
import { Age } from './Age';
import { Container } from './Container';


export function Welcome({name = 'Jimmy', age=19}){
    return(
        <Container title="This is a title!">
            <p> Hello, {name}</p>
            <Age age={age} />
        </Container>
    )
}