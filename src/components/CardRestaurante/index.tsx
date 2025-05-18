type Props = {
  image: string
  title: string
  description: string
  rate: number
  tags: string[]
}

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

const CardRestaurante = ({ image, title, description, rate, tags }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <TagsContainer>
      {tags.map((tag) => (
        <ButtonTag isButton={false} key={tag} text={tag} />
      ))}
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
      <ButtonTag isButton text="Saiba mais" />
    </CardContainer>
  </Card>
)

export default CardRestaurante
