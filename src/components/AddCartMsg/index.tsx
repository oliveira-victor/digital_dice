import * as S from './styles'

import tick from '../../assets/tick.svg'

const AddCartMsg = () => {
    return (
        <S.CartActionBox>
            <img src={tick} alt="Tick icon" />The item has been added to cart!
        </S.CartActionBox>
    )
}

export default AddCartMsg