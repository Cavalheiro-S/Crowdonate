import { Outlet } from "react-router"
import { WrapperStyled } from "../../components/Wrapper/styles"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Container = () => {
    return (
        <>
            <Header />
            <WrapperStyled>
                <Outlet />
            </WrapperStyled>
            <Footer/>
        </>
    )
}

export default Container