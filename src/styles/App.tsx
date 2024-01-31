import { styled } from "styled-components"

export const Container = styled.div`
    max-width: 500px;
    height: 500px;
    margin-inline: auto;
    background-color: #123453;

    &.green {
        background-color: green;
    }
`

export const Icon = styled.img`
    width: 16px;
    height: 16px;
`