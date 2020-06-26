import React from 'react';
import styled from 'styled-components';

export default function Grid(props) {
    return (
        <>
            <Button onClick={() => {
                props.stopGame();
                props.gridReset(15);
            }}>15x15</Button>
            <Button onClick={() => {
                props.stopGame();
                props.gridReset(30);
            }}>30x30</Button>
            <Button onClick={() => {
                props.stopGame();
                props.gridReset(45);
            }
            }>45x45</Button>
            <Button onClick={() => {
                props.stopGame();
                props.gridReset(60);
            }}>60x60</Button>
            <Button onClick={() => {
                props.stopGame();
                props.randomizeGrid();
            }}>Randomize!</Button>
            <Button onClick={() => {
                props.stopGame();
                props.clearGrid();
            }}>Clear Grid!</Button>
            <Button onClick={() => {
                props.gridReset(15);
                props.robotPreset();
            }}>Preset Grid: Robot</Button>
        </>
    )
} 

const Button = styled.button`
background-color: aquamarine;
`