import styled from "styled-components";
import ImageExample from "../../assets/imgs/backgroundTest.jpg"
import { LinkWithoutStyle, styles } from "../../assets/styles/global";

export const SectionProject = styled.section`
    display: flex;
    flex-direction:column;
    height: 100%;
    padding: 2rem 0;
`

export const ProjectTitleBackground = styled.div`
    position: relative;
    padding: 0 4rem;
    background: url(${ImageExample}) center, linear-gradient(180deg, rgba(51, 51, 51, 0) 0%, rgba(51, 51, 51, 0.6) 100%);
    width: 100%;
    height: 10rem;
`

export const ProjectDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 0 4rem;
`

export const ProjectTitle = styled.h3`
    position: absolute;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    padding: 2rem 0;
    bottom:0;
`

export const ProjectDescription = styled.h4`
    font-size: 1.3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    margin: 1rem 0 3rem 0;
`

export const ProjectDescriptionWrapperEdit = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 40px;
`

export const ProjectDescriptionWrapperEditLabel = styled(LinkWithoutStyle)`
    display: flex;
    gap: 40px;
    align-items: center;
    font-size: 24px;
    margin-top: 2rem;
    font-family: "Montserrat", "sans-serif";
    color: ${styles.primary};
`

export const EditIcon = styled.img`
    width: 24px;
    height: 24px;
`

export const DescriptionParagraph = styled.p`
    line-height: 40px;
`