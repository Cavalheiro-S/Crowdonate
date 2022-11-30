import { ButtonStyled } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ children }: ButtonProps) => {

    return (
        <ButtonStyled>{children}</ButtonStyled>
    )
}

export default Button;