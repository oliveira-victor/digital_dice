import * as S from './styles'

import digitalDiceA from '../../assets/digitalDice_a.svg'
import digitalDiceB from '../../assets/digitalDice_b.svg'
import lightThemeCart from '../../assets/cart.svg'
import darkThemeCart from '../../assets/cart-white.svg' 
import moonIcon from '../../assets/moon-icon.svg'
import sunIcon from '../../assets/sun-icon.svg'

type Props = {
    switchTheme: () => void
    themeIsDark: boolean
}

const Header = (props: Props) => {

    return (
        <S.Header>
            <h1>
                <S.Title src={props.themeIsDark ? digitalDiceB : digitalDiceA} alt="Digital Dice logo" />
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
                    <img src={props.themeIsDark ? darkThemeCart : lightThemeCart} alt="Shopping cart icon" />
                    <S.CartNotification>2</S.CartNotification>
                </S.CartIcon>
                <S.themeIcon src={props.themeIsDark ? sunIcon : moonIcon} alt="Dark theme moon icon" onClick={props.switchTheme} />
            </S.Menu>
        </S.Header>
    )
}

export default Header