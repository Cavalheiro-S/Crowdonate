import { PropsWithChildren } from "react"
import { ContainerStyled } from "./styles"

const Container = ({ children }: PropsWithChildren) => {

    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container