import { ButtonAction, ProgressBar, ProgressBarCompleted, ProgressBarPercentageCompleted, SupportersImage, SupportersLabel, SupportersValue, ValueEarnedCash, ValueEarnedLabel, WrapperProgressInfo, WrapperSupporters, WrapperSupportersText, WrapperValueEarned } from "./styles";
import ImageSVG from "../../../assets/imgs/imageCrowd.svg"

const ProgressInfo = () => {

    return (
        <WrapperProgressInfo>
            <WrapperValueEarned>
                <ValueEarnedCash>R$ 1.456</ValueEarnedCash>
                <ValueEarnedLabel>Arrecadado</ValueEarnedLabel>
            </WrapperValueEarned>
            <ProgressBar>
                <ProgressBarCompleted width={50} />
            </ProgressBar>
            <ProgressBarPercentageCompleted>50%</ProgressBarPercentageCompleted>
            <ButtonAction>Apoiar o Projeto</ButtonAction>
            <WrapperSupporters>
                <SupportersImage src={ImageSVG} />
                <WrapperSupportersText>
                    <SupportersValue>2469</SupportersValue>
                    <SupportersLabel>Apoiadores</SupportersLabel>
                </WrapperSupportersText>
            </WrapperSupporters>
        </WrapperProgressInfo>
    )
}

export default ProgressInfo;