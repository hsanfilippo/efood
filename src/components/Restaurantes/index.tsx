import CardRestaurante from '../CardRestaurante'
import { Container, ListaRestaurantes, RestauranteThumb } from './styles'

import { useGetRestaurantesQuery } from '../../services/api'

const Restaurantes = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (!restaurantes) {
    return <h3>Carregando restaurantes...</h3>
  }

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
                restaurante={restaurante}
              />
            </RestauranteThumb>
          ))}
        </ListaRestaurantes>
      </Container>
    </>
  )
}

export default Restaurantes
