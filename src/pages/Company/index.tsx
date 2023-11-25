import { ContentWrapper, Paragraph, SectionTitle } from '../../styles'
import * as S from './/styles'

import gamingOffice from '../../assets/gamingOffice.webp'
import ceo from '../../assets/digitaldice-ceo.webp'

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
        </section>
    )
}

export default Company