import MoneyLogo from "../../../assets/imgs/moneyLogo.svg";
import { EarnedValueMoney, EarnedValueTitle, PercentageCompleted, WrapperEarnedValue, WrapperEarnedValueText, WrapperPercentage } from "./styles";
export default function ProgressBar({ percentage, value }: PropsProgressBar) {
    return (
        <div>
            <span>{percentage}%</span>
            <WrapperPercentage>
                <PercentageCompleted width={percentage}></PercentageCompleted>
            </WrapperPercentage>
            <WrapperEarnedValue>
                <img src={MoneyLogo} alt="Cash" />
                <WrapperEarnedValueText>
                    <EarnedValueMoney>R$ {value.toFixed(2)}</EarnedValueMoney>
                    <EarnedValueTitle>Arrecadado</EarnedValueTitle>
                </WrapperEarnedValueText>
            </WrapperEarnedValue>
        </div>
    )
}

interface PropsProgressBar {
    percentage: number,
    value: number
}