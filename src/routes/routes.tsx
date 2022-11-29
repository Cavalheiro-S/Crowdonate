import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../Containers/NotFound";
import ProjectForm from "../Containers/ProjectForm";
import ProjectInfo from "../Containers/ProjectInfo";
import UserForm from "../Containers/Register";
import UserFormLogin from "../Containers/Signin";
import Container from "./Container";
import Home from "./Home";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container />}>
                    <Route path="/" element={<UserFormLogin />} />
                    <Route path="project" element={<ProjectInfo />} />
                    <Route path="new/project" element={<ProjectForm />} />
                    <Route path="edit/project" element={<ProjectForm />} />
                    <Route path="login" element={<UserFormLogin />} />
                    <Route path="signin" element={<UserForm />} />
                    <Route path="dashboard" element={<Home/>} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;