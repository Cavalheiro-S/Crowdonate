import { EarnedValueMoney, EarnedValueTitle, WrapperEarnedValueText } from "./styles";

interface PropsProgressBar {
    value: number
}

export default function ProgressBar({ value }: PropsProgressBar) {
    return (
        <div>
            <WrapperEarnedValueText>
                <EarnedValueMoney>R$ {value.toFixed(2)}</EarnedValueMoney>
                <EarnedValueTitle>Meta</EarnedValueTitle>
            </WrapperEarnedValueText>
        </div>
    )
}
