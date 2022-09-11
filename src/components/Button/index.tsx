import { PropsWithChildren } from "react";
import { ButtonStyled } from "./styles";

const Button = ({ children }: PropsWithChildren) => {

    return (
        <ButtonStyled>{children}</ButtonStyled>
    )
}

export default Button;