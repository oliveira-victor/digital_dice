import * as S from './styles'

import gamerGirl from '../../assets/gamerGirl.webp'

const InitialBanner = () => {
    return (
        <S.IntroBanner>
            <img src={gamerGirl} alt="3D character of a gamer girl" />
            <S.BannerMsg>
                <div></div>
                <p>Games with up to 30% discount!</p>
            </S.BannerMsg>
        </S.IntroBanner>
    )
}

export default InitialBanner