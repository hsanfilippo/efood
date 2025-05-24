import { useDispatch, useSelector } from 'react-redux'

import LargeBtn from '../LargeBtn'
import { CartContainer, CartItem, Overlay, Sidebar, Total } from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { open } from '../../store/reducers/checkout'
import formataPreco from '../../utils/formataPreco'
import CheckoutForms from '../CheckoutForms'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const { isCheckoutOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={() => closeCart()} />
        <Sidebar>
          {isCheckoutOpen ? (
            <CheckoutForms />
          ) : (
            <>
              {items.length < 1 ? (
                <div className="empty-cart">
                  <img
                    src="https://static-file-vault.vercel.app/images/396946954_11518396.svg"
                    alt="Carrinho vazio"
                  />
                  <p>Ops... seu carrinho está vazio</p>
                </div>
              ) : (
                <>
                  <ul>
                    {items.map((item) => (
                      <CartItem key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                          <h3>{item.nome}</h3>
                          <span>{formataPreco(item.preco)}</span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          type="button"
                        />
                      </CartItem>
                    ))}
                  </ul>
                  <Total>
                    <p>Valor total</p>
                    <p>{formataPreco(getTotalPrice())}</p>
                  </Total>
                  <div onClick={() => dispatch(open())}>
                    <LargeBtn text="Continuar com a entrega" />
                  </div>
                </>
              )}
            </>
          )}
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
