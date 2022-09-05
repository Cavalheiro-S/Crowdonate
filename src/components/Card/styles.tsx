import styled from "styled-components";

export const WrapperCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 300px;
    cursor: pointer;
    transition: ease all 0.2s;
    :hover{
        box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
    }
`

export const CardImage = styled.img`
    width: 100%;
    border-radius: 8px 8px 0 0;
`

export const CardInfo = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    padding: 8px;
`

export const CardTitle = styled.h4`
    margin: 0;
    font-weight: normal;
`

export const CardAutor = styled.span`
    font-size: 0.8rem;
    color: #9B9A9A;
`

export const CardDescription = styled.span`
    font-size: 0.8rem;
    margin: 8px 0;
    line-height: 24px;
`