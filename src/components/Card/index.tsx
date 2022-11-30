import ProgressBar from "./ProgressBar";
import { CardAutor, CardDescription, CardImage, CardInfo, CardTitle, WrapperCard } from "./styles";
import backgroundCard from "../../assets/imgs/backgroundTest.jpg";

export default function Card({ title, author, description, onClick, goal }: PropsCard) {

    return (
        <WrapperCard onClick={() => onClick && onClick()}>
            <CardImage src={backgroundCard} alt="" />
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardAutor>{author}</CardAutor>
                <CardDescription>{description}</CardDescription>
                <ProgressBar value={goal} />
            </CardInfo>
        </WrapperCard>
    )
}

interface PropsCard {
    title: string,
    author: string,
    description: string,
    goal: number,
    onClick?: Function
}