import * as S from './styles'

import menuIcon from '../../assets/mobile-menu-icon.svg'

const PhoneMenu = () => {
    return (
        <S.MenuIcon>
            <img src={menuIcon} alt="Hamburger menu icon" />
        </S.MenuIcon>
    )
}

export default PhoneMenu