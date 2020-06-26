import React from 'react';
import styled from 'styled-components';

export default function TopBar(props) {
    return (
        <>
            <Button onClick={() => props.startGame()}>Start Game</Button>
            <Button onClick={() => props.stopGame()}>Stop Game</Button>
            <Button onClick={() => {
                props.stopGame();
                props.nextGen();
            }}>Next Generation</Button>
            <Button onClick={() => props.increaseSpeed()}>Increase Game Speed</Button>
            <Button onClick={() => props.decreaseSpeed()}>Decrease Game Speed</Button>

        </>
    )
}

const Button = styled.button`
background-color: aquamarine;
`