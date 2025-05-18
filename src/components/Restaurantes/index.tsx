import CardRestaurante from '../CardRestaurante'
import { Container, ListaRestaurantes, RestauranteThumb } from './styles'

import thumbSushi from '../../assets/images/thumb_sushi.png'
import thumbMacarraum from '../../assets/images/thumb_macarraum.png'

const Restaurantes = () => (
  <>
    <Container>
      <ListaRestaurantes>
        <RestauranteThumb>
          <CardRestaurante
            image={thumbSushi}
            title="Hioki Sushi"
            rate={4.9}
            description={
              'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
            }
            tags={['Destaque da semana', 'Japonesa']}
          />
        </RestauranteThumb>
        <RestauranteThumb>
          <CardRestaurante
            image={thumbMacarraum}
            title="La Dolce Vita Trattoria"
            rate={4.6}
            description={
              'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
            }
            tags={['Italiana']}
          />
        </RestauranteThumb>
        <RestauranteThumb>
          <CardRestaurante
            image={thumbMacarraum}
            title="La Dolce Vita Trattoria"
            rate={4.6}
            description={
              'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
            }
            tags={['Italiana']}
          />
        </RestauranteThumb>
        <RestauranteThumb>
          <CardRestaurante
            image={thumbMacarraum}
            title="La Dolce Vita Trattoria"
            rate={4.6}
            description={
              'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
            }
            tags={['Italiana']}
          />
        </RestauranteThumb>
        <RestauranteThumb>
          <CardRestaurante
            image={thumbMacarraum}
            title="La Dolce Vita Trattoria"
            rate={4.6}
            description={
              'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
            }
            tags={['Italiana']}
          />
        </RestauranteThumb>
        <RestauranteThumb>
          <CardRestaurante
            image={thumbMacarraum}
            title="La Dolce Vita Trattoria"
            rate={4.6}
            description={
              'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
            }
            tags={['Italiana']}
          />
        </RestauranteThumb>
      </ListaRestaurantes>
    </Container>
  </>
)

export default Restaurantes
