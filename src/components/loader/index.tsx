import { LoaderContainer } from './styles'

import loaderImg from '../../assets/images/loader.gif'

const Loader = () => {
    return (
        <LoaderContainer>
            <img src={loaderImg} alt="loader gif" />
        </LoaderContainer>
    )
}

export default Loader