import { ContentWrapper } from '../../styles'
import * as S from './styles'

const Hero = () => {
    return (
        <S.HeroImg>
            <S.HeroGradient></S.HeroGradient>
            <ContentWrapper>
                <div>
                    <S.ReleaseTitle>Our latest release</S.ReleaseTitle>
                    <S.HeroGameTitle>The Jungle Quest</S.HeroGameTitle>
                    <S.HeroText>
                        Help Iara save her people in this new incredible release <br />from <span>$ 23</span> to only $15 for a limited time!
                    </S.HeroText>
                    <S.HeroBtn>Get it now!</S.HeroBtn>
                </div>
            </ContentWrapper>
        </S.HeroImg>
    )
}

export default Hero