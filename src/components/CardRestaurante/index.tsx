type Props = {
  image: string
  title: string
  rate: number
  description: string
  type: string
  destaque?: boolean
  restaurante: Restaurante
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
import Restaurante from '../../models/Restaurante'

const CardRestaurante = ({
  image,
  title,
  rate,
  description,
  type,
  destaque,
  restaurante
}: Props) => {
  return (
    <Card>
      <img src={restaurante.capa} alt={restaurante.titulo} />
      <TagsContainer>
        {restaurante.destacado && (
          <ButtonTag isButton={false} text="Destaque da semana" />
        )}
        <ButtonTag isButton={false} text={restaurante.tipo} />
      </TagsContainer>
      <CardContainer>
        <TitleRateContainer>
          <h3>{restaurante.titulo}</h3>
          <Rating>
            <p>{restaurante.avaliacao}</p>
            <img src={rateStar} alt="nota" />
          </Rating>
        </TitleRateContainer>
        <Description>{restaurante.descricao}</Description>
        <Link to={`perfil/${restaurante.id}`}>
          <ButtonTag isButton text="Saiba mais" />
        </Link>
      </CardContainer>
    </Card>
  )
}

export default CardRestaurante
