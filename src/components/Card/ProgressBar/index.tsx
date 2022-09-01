import { PercentageCompleted, WrapperPercentage } from "./styles"

export default function ProgressBar({ percentage, value }: PropsProgressBar) {
    return (
        <div>
            <span>{percentage}</span>
            <WrapperPercentage>
                <PercentageCompleted></PercentageCompleted>
            </WrapperPercentage>
            <div>
                <img src="" alt="" />
                <div>
                    <span>{value.toFixed(2)}</span>
                    <span>Arrecadado</span>
                </div>
            </div>
        </div>
    )
}

interface PropsProgressBar {
    percentage: number,
    value: number
}