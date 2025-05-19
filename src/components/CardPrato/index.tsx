import Prato from '../../models/Prato'
import LargeBtn from '../LargeBtn'
import { Card, TitlePrato, DescriptionPrato } from './styles'

const CardPrato = ({ image, title, description, id }: Prato) => {
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
      <LargeBtn text="Adicionar ao carrinho" />
    </Card>
  )
}

export default CardPrato
