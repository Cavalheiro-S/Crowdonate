import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProjectInfo from "../Containers/Project-Info";
import Container from "./Container";
import Home from "./Home"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container />}>
                    <Route path="/" element={<Home />} />
                    <Route path="project" element={<ProjectInfo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;