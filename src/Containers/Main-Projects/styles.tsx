import styled from "styled-components"
import { styles } from "../../assets/styles/global"


export const SectionMainProjects = styled.section`
    padding: 2rem 4rem;
    margin: 4rem 0 6rem 0;
`
export const TitleSection = styled.h2`
    font-size: 1.4rem;
    font-family: "Montserrat", sans-serif;
    color: ${styles.dark};
    margin-bottom: 2rem;

`

export const WrapperCards = styled.div`
    display: flex;
    gap: 40px;
    justify-content: space-between;
    
    flex-wrap: wrap;
    width: 100%;
`
export const NoDataImg = styled.img`
    width: 100%;
    height: 128px;
`

export const NoDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin-top: 1rem;
`

export const NoDataText = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${styles.primary};
`
