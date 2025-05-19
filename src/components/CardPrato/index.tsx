import LargeBtn from '../LargeBtn'
import { Card, TitlePrato, DescriptionPrato } from './styles'

type Props = {
  image: string
  title: string
  description: string
  id?: number
  onClick: () => void
}

const CardPrato = ({ image, title, description, id, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 129) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <TitlePrato>{title}</TitlePrato>
      <DescriptionPrato>{getDescricao(description)}</DescriptionPrato>
      <div onClick={onClick}>
        <LargeBtn text="Adicionar ao carrinho" />
      </div>
    </Card>
  )
}

export default CardPrato
