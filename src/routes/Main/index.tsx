import { Outlet } from "react-router"
import { WrapperStyled } from "../../components/Wrapper/styles"
import Header from "../../components/Header"

const Container = () => {
    return (
        <>
            <Header />
            <WrapperStyled>
                <Outlet />
            </WrapperStyled>
        </>
    )
}

export default Container