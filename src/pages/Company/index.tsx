import { ContentWrapper, Paragraph, SectionTitle } from '../../styles'
import * as S from './/styles'

import gamingOffice from '../../assets/gamingOffice.webp'
import ceo from '../../assets/digitaldice-ceo.webp'
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores! Minima eos doloribus odio itaque aspernatur illum, illo laudantium sequi non est nesciunt accusantium molestias veniam fugiat quod sint veritatis?
                            Assumenda, temporibus quae! Exercitationem nemo vel aspernatur, quo eius aut cumque eaque rerum ad illo minus doloremque quibusdam alias itaque? Deserunt necessitatibus consequatur dolorem fugit, modi inventore? Sint, aperiam ab.
                            Magni sequi nulla odio ut laborum aspernatur mollitia aliquid, ducimus, nostrum aliquam quaerat quidem amet sint accusamus nesciunt, eaque recusandae maxime sed tempora praesentium enim. Sint debitis sit iusto nostrum.
                            Magnam possimus velit officia vel obcaecati voluptatum officiis similique ad cum dignissimos atque modi, quasi impedit pariatur veritatis soluta molestiae sed facere, harum doloribus ullam et. Excepturi nulla consequatur nihil.
                        </Paragraph>
                    </S.textContainer>
                    <img src={gamingOffice} alt="Digital Dice gaming office" />
                </S.firstWrapper>
            </ContentWrapper>
            <S.MainColorBg>
                <ContentWrapper>
                    <S.secondWrapper>
                        <img src={ceo} alt="Digital Dice founder" />
                        <S.textContainer>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores! Minima eos doloribus odio itaque aspernatur illum, illo laudantium sequi non est nesciunt accusantium molestias veniam fugiat quod sint veritatis?
                                Assumenda, temporibus quae! Exercitationem nemo vel aspernatur, quo eius aut cumque eaque rerum ad illo minus doloremque quibusdam alias itaque? Deserunt necessitatibus consequatur dolorem fugit, modi inventore? Sint, aperiam ab.
                                Magni sequi nulla odio ut laborum aspernatur mollitia aliquid, ducimus, nostrum aliquam quaerat quidem amet sint accusamus nesciunt, eaque recusandae maxime sed tempora praesentium enim. Sint debitis sit iusto nostrum.
                                Magnam possimus velit officia vel obcaecati voluptatum officiis similique ad cum dignissimos atque modi, quasi impedit pariatur veritatis soluta molestiae sed facere, harum doloribus ullam et. Excepturi nulla consequatur nihil.
                            </Paragraph>
                        </S.textContainer>
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