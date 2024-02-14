import { SectionTitle } from "../../styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { useState } from "react"
import CartItem from "../../components/CartItem"
import CheckoutForm from "../../containers/CheckoutForm"
import { orderPlaced } from '../../store/reducers/orderPlaced'

import * as S from './styles'

import emptyCart from '../../assets/empty-cart.webp'
import happyChars from '../../assets/happyChars.webp'

const CartPage = () => {

    const dispatch = useDispatch()

    const items = useSelector((state: RootReducer) => state.cart.items)
    const modal = useSelector((state: RootReducer) => state.orderPlaced.modalOn)
    const orderNumber = useSelector((state: RootReducer) => state.orderPlaced.orderNumber)

    const prices = items.map(game => game.currentPrice)

    const totalPrice = prices.reduce((sum, price) => sum + price, 0)

    const [showForm, setShowForm] = useState(false)

    return (
        <>
            {modal && (
                <S.Modal className="modal">
                    <div className="overlay" onClick={() => dispatch(orderPlaced())}></div>
                    <S.ModalContainer>
                        <img src={happyChars} alt="Happy characterss" />
                        <div>
                            <h3>Congrats!</h3>
                            <div>Order number {orderNumber}</div>
                            <p>
                                Your order has been placed and you'll be receiving the game download code on your e-mail. Use that code in your game console to start the download and have fun!
                            </p>
                            <button type="button" onClick={() => dispatch(orderPlaced())}>Finish</button>
                        </div>
                    </S.ModalContainer>
                </S.Modal>
            )}

            <S.CartContentWrapper>
                {items.length >= 1 ? (
                    <>
                        <SectionTitle>Your shopping cart</SectionTitle>
                        <ul>
                            {items?.map((game) => (
                                <CartItem key={game.id} game={game} />
                            ))}
                        </ul>
                        <S.CheckoutContainer>
                            <S.Total>{items.length >= 2 ? `${items.length} games ` : `${items.length} game •`}</S.Total>
                            <S.Total>Total: $ {totalPrice}</S.Total>
                            {!showForm ? (
                                <a href="#checkout-form"><S.CheckoutBtn onClick={() => setShowForm(true)}>Check-out</S.CheckoutBtn></a>
                            ) : ''}
                        </S.CheckoutContainer>
                        <div id="checkout-form">
                            {showForm && <CheckoutForm finalItems={items.length} finalPrice={totalPrice} />}
                        </div>
                    </>
                ) : (
                    <S.EmptyCartContainer>
                        <S.EmptyCartTxt>Your shopping cart is empty.</S.EmptyCartTxt>
                        <img src={emptyCart} alt="Empty cart image" />
                    </S.EmptyCartContainer>
                )}
            </S.CartContentWrapper>
        </>
    )
}

export default CartPage