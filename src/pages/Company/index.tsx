import { ContentWrapper, Paragraph, SectionTitle } from '../../styles'
import * as S from './/styles'

import gamingOffice from '../../assets/gamingOffice.webp'
import ceo from '../../assets/digitaldice-ceo.webp'
import team1 from '../../assets/team1.webp'
import team2 from '../../assets/team2.webp'
import partner1 from '../../assets/partner1.svg'
import partner2 from '../../assets/partner2.svg'
import partner3 from '../../assets/partner3.svg'

const Company = () => {
    return (
        <section>
            <S.CompanyHero></S.CompanyHero>
            <ContentWrapper>
                <SectionTitle>About Digital Dice</SectionTitle>
                <S.firstWrapper>
                    <S.textContainer>
                        <Paragraph>
                            <p>
                                Welcome to Digital Dice, where innovation meets play! Based in the vibrant city of Maceió, Alagoas - Brazil, we are a cutting-edge video game company dedicated to crafting unforgettable electronic gaming experiences. At Digital Dice, we pride ourselves on pushing the boundaries of gaming, creating not just games but immersive worlds that captivate players. Our passion for gaming fuels our commitment to delivering top-notch entertainment, making us a hub for exclusive games that redefine the industry.
                            </p>
                            <br />
                            <p>
                                With our state-of-the-art headquarters in Maceió, we harness the creative energy of our diverse team to develop groundbreaking titles for a variety of platforms. From cutting-edge consoles to portable gaming devices, Digital Dice ensures that players can enjoy our unique gaming universe anytime, anywhere. What sets us apart? It's our unwavering dedication to originality and quality. We don't just follow trends; we set them. Our exclusive games showcase the depth of our storytelling, the richness of our graphics, and the seamless integration of technology to elevate your gaming experience.
                            </p>
                            <br />
                            <p>
                                Join us on this thrilling journey through the digital realms we've meticulously crafted. At Digital Dice, the dice are loaded with excitement, and the adventure never stops. Welcome to a world where every game is an event, every console is a masterpiece, and every player becomes part of our gaming family. Let the games begin!
                            </p>
                        </Paragraph>
                    </S.textContainer>
                    <img src={gamingOffice} alt="Digital Dice gaming office" />
                </S.firstWrapper>
            </ContentWrapper>
            <S.MainColorBg>
                <ContentWrapper>
                    <S.secondWrapper>
                        <img src={ceo} alt="Digital Dice founder" />
                        <img src={team1} alt="The company's team" />
                        <img src={team2} alt="The company's team" />
                    </S.secondWrapper>
                </ContentWrapper>
            </S.MainColorBg>
            <ContentWrapper>
                <S.PartnersTitle>Our partners:</S.PartnersTitle>
                <S.PartnersList>
                    <S.PartnerContainer>
                        <img src={partner1} alt="VFO Studio logo" />
                    </S.PartnerContainer>
                    <S.PartnerContainer>
                        <img src={partner2} alt="Happy Bits logo" />
                    </S.PartnerContainer>
                    <S.PartnerContainer>
                        <img src={partner3} alt="The Artists Hub logo" />
                    </S.PartnerContainer>
                </S.PartnersList>
            </ContentWrapper>

        </section>
    )
}

export default Company