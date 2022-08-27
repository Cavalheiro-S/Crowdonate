import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "./Container";
import Home from "./Home"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;