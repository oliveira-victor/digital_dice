import FormInput from '../../components/FormInput'
import { SectionTitle } from '../../styles'

import * as S from './styles'

type Props = {
    finalPrice: number
    finalItems: number
}

const CheckoutForm = ({ finalPrice, finalItems }: Props) => {

    return (
        <S.CheckoutContainer>
            <SectionTitle>Checkout</SectionTitle>
            <S.CartForm>
                <S.InputsContainer>
                    <div>
                        <S.FormTitle>Billing address</S.FormTitle>
                        <FormInput text='Full name' title='fullName' type='text' />
                        <FormInput text='Email' title='email' type='email' />
                        <FormInput text='Address' title='address' type='text' />
                        <S.DoubleFields>
                            <div>
                                <FormInput text='City' title='city' type='text' />
                            </div>
                            <div>
                                <FormInput text='State' title='state' type='text' />
                            </div>
                        </S.DoubleFields>
                        <S.DoubleFields>
                            <div>
                                <FormInput text='Country' title='country' type='text' />
                            </div>
                            <div>
                                <FormInput text='Zip code' title='zip' type='number' />
                            </div>
                        </S.DoubleFields>
                    </div>
                    <div>
                        <S.FormTitle>Payment</S.FormTitle>
                        <FormInput text='Name on card' title='nameOnCard' type='text' />
                        <FormInput text='Credit card number' title='cardNumber' type='number' />
                        <S.TripleFields>
                            <div>
                                <FormInput text='Exp month' title='expMonth' type='number' />
                            </div>
                            <div>
                                <FormInput text='Exp year' title='expYear' type='number' />
                            </div>
                            <div>
                                <FormInput text='CVV' title='cvv' type='number' />
                            </div>
                        </S.TripleFields>
                    </div>
                </S.InputsContainer>
                <S.submitContainer>
                    <p>You're buying {finalItems} {finalItems > 1 ? 'games' : 'game'} for $ {finalPrice}</p>
                    <S.PurchaseBtn>Confirm payment</S.PurchaseBtn>
                </S.submitContainer>
            </S.CartForm>
        </S.CheckoutContainer>
    )
}

export default CheckoutForm