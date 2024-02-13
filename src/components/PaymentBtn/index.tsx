import { PurchaseBtn } from './styles'

type Props = {
    onClick: () => void
    disabled: boolean
    content: string
}

const PaymentBtn = ({ onClick, disabled, content }: Props) => {
    return (
        <PurchaseBtn
            type='submit'
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </PurchaseBtn>
    )
}

export default PaymentBtn