import Prato from '../../models/Prato'
import LargeBtn from '../LargeBtn'
import { Card, TitlePrato, DescriptionPrato } from './styles'

const CardPrato = ({ image, title, description, id }: Prato) => (
  <Card>
    <img src={image} alt={title} />
    <TitlePrato>{title}</TitlePrato>
    <DescriptionPrato>{description}</DescriptionPrato>
    <LargeBtn text="Adicionar ao carrinho" />
  </Card>
)

export default CardPrato
