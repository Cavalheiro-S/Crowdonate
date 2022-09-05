
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { SectionMainProjects, WrapperCards } from "./styles";

const MainProjects = () => {
    const navigate = useNavigate();

    return (
        <SectionMainProjects>
            <h3>Main Projects</h3>
            <WrapperCards>
                <Card onClick={() => navigate('/project')} title="Titulo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." author="autor" />
                <Card onClick={() => navigate('/project')} title="Titulo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." author="autor" />
                <Card onClick={() => navigate('/project')} title="Titulo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." author="autor" />
                <Card onClick={() => navigate('/project')} title="Titulo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." author="autor" />
                <Card onClick={() => navigate('/project')} title="Titulo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." author="autor" />
            </WrapperCards>
        </SectionMainProjects>
    )
}

export default MainProjects;