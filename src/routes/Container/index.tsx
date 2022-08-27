import { Outlet } from "react-router"
import { ContainerStyled } from "../../components/Container/styles"
import Header from "../../components/Header"

const Container = () => {
    return (
        <>
            <Header />
            <ContainerStyled>
                <Outlet />
            </ContainerStyled>
        </>
    )
}

export default Container