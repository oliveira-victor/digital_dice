import * as S from './styles'

import gamerBoy from '../../assets/images/gamerBoy.webp'
import instagramIcon from '../../assets/images/icon-instagram.svg'
import facebookIcon from '../../assets/images/icon-facebook.svg'
import twitterIcon from '../../assets/images/icon-twitter.svg'

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContentWrapper>
                <S.FooterInfo>
                    <S.SocialMediaIcons>
                        <li>
                            <img src={instagramIcon} alt="" />
                        </li>
                        <li>
                            <img src={facebookIcon} alt="" />
                        </li>
                        <li>
                            <img src={twitterIcon} alt="" />
                        </li>
                    </S.SocialMediaIcons>
                    <p>Subscribe to our newsletter and learn about our fresh releases and discounts before anyone else!</p>
                    <S.SubscribeForm>
                        <S.SubscribeInput type="text" placeholder='Your email here' />
                        <S.SubscribeBtn type='button'>Subscribe</S.SubscribeBtn>
                    </S.SubscribeForm>
                    <p>
                        Digital Dice and all its games are fictional and created by Victor Freire Oliveira - front-end developer, for portfolio
                        project purpose, using React JS, Redux, Styled-Components and TypeScript as main techs. All the design was also
                        created by the author, and the games images were generated by the AI Bing Image Creator, from prompt inputs
                        also provided by the author.
                    </p>
                    <S.Copyright>
                        2023 Digital Dice - All rights reserved
                    </S.Copyright>
                </S.FooterInfo>
                <S.FooterImg>
                    <img src={gamerBoy} alt="3D character of a gamer boy" />
                </S.FooterImg>
            </S.FooterContentWrapper>
        </S.Footer>
    )
}

export default Footer