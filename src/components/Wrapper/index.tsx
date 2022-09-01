import { PropsWithChildren } from "react"
import { WrapperStyled } from "./styles"

const Wrapper = ({ children }: PropsWithChildren) => {

    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper