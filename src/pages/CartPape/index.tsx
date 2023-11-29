import { SectionTitle } from "../../styles"

import * as S from './styles'

const CartPage = () => {
    return (
        <S.CartContentWrapper>
            <SectionTitle>Your shopping cart</SectionTitle>
            <ul>
                <S.GameList>
                    <S.GameInfo>
                        <S.GameThumb src="https://raw.githubusercontent.com/oliveira-victor/servidor_estaticos/main/digital-dice_server/images/the-jungle-quest.webp" alt="" />
                        <div>
                            <S.GameCartTitle>Game Title</S.GameCartTitle>
                            <S.PreviousPriceCart>$ 15</S.PreviousPriceCart>
                            <S.CurrentPriceCart>Price: $ 10</S.CurrentPriceCart>
                        </div>
                    </S.GameInfo>
                    <S.RemoveItemButton>Remove from cart</S.RemoveItemButton>
                </S.GameList>
                <S.GameList>
                    <S.GameInfo>
                        <S.GameThumb src="https://raw.githubusercontent.com/oliveira-victor/servidor_estaticos/main/digital-dice_server/images/the-jungle-quest.webp" alt="" />
                        <div>
                            <S.GameCartTitle>Game Title</S.GameCartTitle>
                            <S.PreviousPriceCart>$ 15</S.PreviousPriceCart>
                            <S.CurrentPriceCart>Price: $ 10</S.CurrentPriceCart>
                        </div>
                    </S.GameInfo>
                    <S.RemoveItemButton>Remove from cart</S.RemoveItemButton>
                </S.GameList>
            </ul>
            <S.CheckoutContainer>
                <S.Total>Total: $ 20</S.Total>
                <S.CheckoutBtn>Check-out</S.CheckoutBtn>
            </S.CheckoutContainer>
        </S.CartContentWrapper>
    )
}

export default CartPage