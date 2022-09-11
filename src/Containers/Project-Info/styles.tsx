import styled from "styled-components";

export const SectionProject = styled.section`
    display: flex;
    flex-direction:column;
    height: 100%;
    padding: 4rem 0;
`

export const ProjectTitleBackground = styled.div`
    padding: 3rem 4rem;
    background: linear-gradient(180deg, rgba(51, 51, 51, 0) 0%, rgba(51, 51, 51, 0.6) 100%);
    width: 100%;
`

export const ProjectDescriptionWrapper = styled.div`
    display: flex;
    background-color: white;
    padding: 0 4rem;
    gap: 10rem;
`

export const ProjectTitle = styled.h3`
    font-family: "Montserrat", sans-serif;
    margin: 0;
    font-size: 1.6rem;
    color: white;
`

export const ProjectDescription = styled.h4`
    font-size: 1.3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    margin: 3rem 0;
`

export const DescriptionParagraph = styled.p`
    line-height: 40px;
`