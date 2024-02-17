import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import tick from '../../assets/images/tick.svg'

const AddCartMsg = () => {

    const revealState = useSelector((state: RootReducer) => state.reveal.reveal)

    return (
        <>
            {revealState ? 
                <S.CartActionBox>
                    <img src={tick} alt="Tick icon" />The item has been added to the cart!
                </S.CartActionBox> 
            : ''}
        </>
    )
}

export default AddCartMsg