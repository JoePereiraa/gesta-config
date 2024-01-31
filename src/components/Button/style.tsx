import { styled } from "styled-components"

export const Button = styled.button<{ $center?: boolean; }>`
    width: 100%;
    padding: 8px;

    background-color: green;
    border: none;
    border-radius: var(--spacing-1);

    text-align: ${props => props.$center ? "center" : "start"};
    
`
