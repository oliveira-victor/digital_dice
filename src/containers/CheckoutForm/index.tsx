import { useFormik } from 'formik'
import { SectionTitle } from '../../styles'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import * as S from './styles'
import { useEffect } from 'react'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../../store/reducers/cart'
import { orderPlaced, setOrderNumber } from '../../store/reducers/orderPlaced'
import PaymentBtn from '../../components/PaymentBtn'
import { RootReducer } from '../../store'

type Props = {
    finalPrice: number
    finalItems: number
}

const CheckoutForm = ({ finalPrice, finalItems }: Props) => {

    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    const form = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            address: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
            houseNumber:'',
            nameOnCard: '',
            cardNumber: '',
            expMonth: '',
            expYear: '',
            cvv: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required(),
            email: Yup.string().required(),
            address: Yup.string().required(),
            city: Yup.string().required(),
            state: Yup.string().required(),
            country: Yup.string().required(),
            zipCode: Yup.string().required(),
            houseNumber: Yup.string().required(),
            nameOnCard: Yup.string().required(),
            cardNumber: Yup.number().required(),
            expMonth: Yup.number().required(),
            expYear: Yup.number().required(),
            cvv: Yup.number().required()
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.fullName,
                    address: {
                        description: values.address,
                        email: values.email,
                        city: values.city,
                        state: values.state,
                        country: values.country,
                        zipcode: values.zipCode,
                        houseNumber: values.houseNumber
                    }
                },
                payment: {
                    card: {
                        name: values.nameOnCard,
                        number: values.cardNumber,
                        code: Number(values.cvv),
                        expires: {
                            month: Number(values.expMonth),
                            year: Number(values.expYear)
                        }
                    }
                },
                products: items.map((item) => ({
                    id: item.id,
                    price: item.currentPrice
                }))
            })
        }
    })

    useEffect(() => {
        if (isSuccess) {
            dispatch(setOrderNumber(data.orderId))
            dispatch(orderPlaced())
            dispatch(clear())
        }
    }, [isSuccess, useDispatch])

    return (
        <section>
            <SectionTitle>Checkout</SectionTitle>
            <S.CartForm onSubmit={form.handleSubmit}>
                <S.InputsContainer>
                    <div>
                        <S.FormTitle>Billing address</S.FormTitle>
                        <S.FormLabel htmlFor="fullName">Full Name</S.FormLabel>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={form.values.fullName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('fullName') ? 'error' : ''}
                        />
                        <S.FormLabel htmlFor="email">Email</S.FormLabel>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.values.email}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('email') ? 'error' : ''}
                        />
                        <S.AddressDoubleField>
                            <div>
                                <S.FormLabel htmlFor="address">Address</S.FormLabel>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={form.values.address}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('address') ? 'error' : ''}
                                />
                            </div>
                            <div>
                                <S.FormLabel htmlFor="houseNumber">Number</S.FormLabel>
                                <input
                                    type="text"
                                    name="houseNumber"
                                    id="houseNumber"
                                    value={form.values.houseNumber}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('houseNumber') ? 'error' : ''}
                                />
                            </div>
                        </S.AddressDoubleField>
                        <S.DoubleFields>
                            <div>
                                <S.FormLabel htmlFor="city">City</S.FormLabel>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={form.values.city}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('city') ? 'error' : ''}
                                />
                            </div>
                            <div>
                                <S.FormLabel htmlFor="state">State</S.FormLabel>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    value={form.values.state}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('state') ? 'error' : ''}
                                />
                            </div>
                        </S.DoubleFields>
                        <S.DoubleFields>
                            <div>
                                <S.FormLabel htmlFor="country">Country</S.FormLabel>
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    value={form.values.country}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('country') ? 'error' : ''}
                                />
                            </div>
                            <div>
                                <S.FormLabel htmlFor="zipCode">Zip code</S.FormLabel>
                                <input
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    value={form.values.zipCode}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('zipCode') ? 'error' : ''}
                                />
                            </div>
                        </S.DoubleFields>
                    </div>

                    <div>
                        <S.FormTitle>Payment</S.FormTitle>
                        <S.FormLabel htmlFor="nameOnCard">Name on card</S.FormLabel>
                        <input
                            type="text"
                            name="nameOnCard"
                            id="nameOnCard"
                            value={form.values.nameOnCard}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('nameOnCard') ? 'error' : ''}
                        />
                        <S.FormLabel htmlFor="cardNumber">Card number</S.FormLabel>
                        <InputMask
                            type="text"
                            name="cardNumber"
                            id="cardNumber"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('cardNumber') ? 'error' : ''}
                            mask="9999 9999 9999 9999"
                        />
                        <S.TripleFields>
                            <div>
                                <S.FormLabel htmlFor="expMonth">Exp month</S.FormLabel>
                                <InputMask
                                    type="text"
                                    name="expMonth"
                                    id="expMonth"
                                    value={form.values.expMonth}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('expMonth') ? 'error' : ''}
                                    mask="99"
                                />
                            </div>
                            <div>
                                <S.FormLabel htmlFor="expYear">Exp Year</S.FormLabel>
                                <InputMask
                                    type="text"
                                    name="expYear"
                                    id="expYear"
                                    value={form.values.expYear}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('expYear') ? 'error' : ''}
                                    mask="99"
                                />
                            </div>
                            <div>
                                <S.FormLabel htmlFor="cvv">CVV</S.FormLabel>
                                <InputMask
                                    type="text"
                                    name="cvv"
                                    id="cvv"
                                    value={form.values.cvv}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputHasError('cvv') ? 'error' : ''}
                                    mask="999"
                                />
                            </div>
                        </S.TripleFields>
                    </div>
                </S.InputsContainer>

                <S.submitContainer>
                    <p>You're buying {finalItems} {finalItems > 1 ? 'games' : 'game'} for $ {finalPrice}</p>
                    <PaymentBtn 
                        onClick={form.handleSubmit}
                        disabled={isLoading}
                        content={isLoading ? 'Processing payment' : 'Confirm payment'}
                    />
                </S.submitContainer>
            </S.CartForm>
        </section>
    )
}

export default CheckoutForm