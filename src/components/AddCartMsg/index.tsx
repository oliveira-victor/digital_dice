import * as S from './styles'

import { RootReducer } from '../../store'

import tick from '../../assets/tick.svg'
import { useSelector } from 'react-redux'

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