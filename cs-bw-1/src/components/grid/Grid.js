import React from 'react';
import styled from 'styled-components'
import Cell from '../cell/Cell'

export default function Grid(props) {
    return (
        <GridContainer>
            {props.currentGrid.map(eachRow => {
                return eachRow.map(eachCell => {
                    return (
                        <Cell 
                        cell={eachCell}
                        key={`X:${eachCell.xVal}, Y:${eachCell.yVal}`}
                        size={props.size}
                        toggleCell={props.toggleCell}
                        />
                    )
                })
            })}
        </GridContainer>

    )
}

const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    border: 1px solid gray;
`;