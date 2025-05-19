import { useEffect, useState } from 'react'
import CardRestaurante from '../CardRestaurante'
import { Container, ListaRestaurantes, RestauranteThumb } from './styles'
import Restaurante from '../../models/Restaurante'

import thumbSushi from '../../assets/images/thumb_sushi.png'
import thumbMacarraum from '../../assets/images/thumb_macarraum.png'

const Restaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Container>
        <ListaRestaurantes>
          {restaurantes.map((restaurante) => (
            <RestauranteThumb key={restaurante.id}>
              <CardRestaurante
                image={restaurante.capa}
                title={restaurante.titulo}
                rate={restaurante.avaliacao}
                description={restaurante.descricao}
                type={restaurante.tipo}
              />
            </RestauranteThumb>
          ))}
        </ListaRestaurantes>
      </Container>
    </>
  )
}

export default Restaurantes
