import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectForm from "../Containers/Project-Form";
import ProjectInfo from "../Containers/Project-Info";
import UserForm from "../Containers/User-Form";
import Container from "./Container";
import Home from "./Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container />}>
                    <Route path="/" element={<Home />} />
                    <Route path="project" element={<ProjectInfo />} />
                    <Route path="new/project" element={<ProjectForm />} />
                    <Route path="new/user" element={<UserForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;