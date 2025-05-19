type Props = {
  image: string
  title: string
  description: string
  rate: number
  type: string
}

import { Link } from 'react-router-dom'
import rateStar from '../../assets/images/estrela_fav.svg'
import ButtonTag from '../ButtonTag'
import {
  Card,
  TitleRateContainer,
  Rating,
  Description,
  CardContainer,
  TagsContainer
} from './styles'

const CardRestaurante = ({ image, title, description, rate, type }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <TagsContainer>
      <ButtonTag isButton={false} text={type} />
    </TagsContainer>
    <CardContainer>
      <TitleRateContainer>
        <h3>{title}</h3>
        <Rating>
          <p>{rate}</p>
          <img src={rateStar} alt="nota" />
        </Rating>
      </TitleRateContainer>
      <Description>{description}</Description>
      <Link to="/perfil">
        <ButtonTag isButton text="Saiba mais" />
      </Link>
    </CardContainer>
  </Card>
)

export default CardRestaurante
