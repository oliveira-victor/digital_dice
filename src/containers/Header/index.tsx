import digitalDiceA from '../../assets/digitalDice_a.svg'
import * as S from './styles'

import cart from '../../assets/cart.svg'

const Header = () => {
    return (
        <S.Header>
            <h1>
                <S.Title src={digitalDiceA} alt="Digital Dice logo" />
            </h1>
            <S.Menu>
                <S.MenuList>
                    <S.MenuOption>
                        Games
                    </S.MenuOption>
                    <S.MenuOption>
                        The company
                    </S.MenuOption>
                    <S.MenuOption>
                        Login
                    </S.MenuOption>
                </S.MenuList>
                <S.CartIcon>
                    <img src={cart} alt="Shopping cart icon" />
                    <S.CartNotification>2</S.CartNotification>
                </S.CartIcon>
            </S.Menu>
        </S.Header>
    )
}

export default Header