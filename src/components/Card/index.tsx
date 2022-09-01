import ProgressBar from "./ProgressBar";
import { CardAutor, CardDescription, CardImage, CardInfo, CardTitle, WrapperCard } from "./styles";
import backgroundCard from "../../assets/imgs/backgroundTest.png"
export default function Card({ title, author, description }: PropsCard) {

    return (
        <WrapperCard>
            <CardImage src={backgroundCard} alt="" />
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardAutor>{author}</CardAutor>
                <CardDescription>{description}</CardDescription>
                <ProgressBar percentage={50} value={1456} />
            </CardInfo>
        </WrapperCard>
    )
}

interface PropsCard {
    title: string,
    author: string,
    description: string
}