import CardPrato from '../CardPrato'

import { PratosContainer, PratosList } from './styles'
import { GlobalContainer } from '../../styles'

import thumbPizza from '../../assets/images/thumb_pizza.png'

const Pratos = () => (
  <PratosContainer>
    <GlobalContainer>
      <PratosList>
        <li>
          <CardPrato
            image={thumbPizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            id={1}
          />
        </li>
        <li>
          <CardPrato
            image={thumbPizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            id={2}
          />
        </li>
        <li>
          <CardPrato
            image={thumbPizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            id={3}
          />
        </li>
        <li>
          <CardPrato
            image={thumbPizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            id={4}
          />
        </li>
        <li>
          <CardPrato
            image={thumbPizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            id={5}
          />
        </li>
        <li>
          <CardPrato
            image={thumbPizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
            id={6}
          />
        </li>
      </PratosList>
    </GlobalContainer>
  </PratosContainer>
)

export default Pratos
