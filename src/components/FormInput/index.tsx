import * as S from './styles'

type Props = {
    text: string
    title: string
    type: string
}

const FormInput = ({text, title, type}: Props) => {
    return (
        <>
            <S.FormLabel htmlFor={title}>{text}</S.FormLabel>
            <S.Input type={type} name={title} />
        </>
    )
}

export default FormInput