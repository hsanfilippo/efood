import CardPrato from '../CardPrato'

const Pratos = () => (
  <div>
    <ul>
      <li>
        <CardPrato
          image="https://placehold.co/304x167"
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          id={1}
        />
      </li>
      <li>
        <CardPrato
          image="https://placehold.co/304x167"
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          id={2}
        />
      </li>
      <li>
        <CardPrato
          image="https://placehold.co/304x167"
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          id={3}
        />
      </li>
    </ul>
  </div>
)

export default Pratos
