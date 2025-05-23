import { useDispatch } from 'react-redux'
import { close } from '../../store/reducers/checkout'

import LargeBtn from '../LargeBtn'
import {
  ButtonsContainer,
  Container,
  InputGroup,
  TabTitle,
  TextoConcluir
} from './styles'

const CheckoutForms = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <TabTitle>Entrega</TabTitle>
        <InputGroup>
          <label htmlFor="nomeCompleto">Quem irá receber</label>
          <input type="text" id="nomeCompleto" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="endereco">Endereço</label>
          <input type="text" id="endereco" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" />
        </InputGroup>
        <div className="input-flex">
          <InputGroup maxWidth="140px">
            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep" />
          </InputGroup>
          <InputGroup maxWidth="140px">
            <label htmlFor="numero">Número</label>
            <input type="text" id="numero" />
          </InputGroup>
        </div>
        <InputGroup>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input type="text" id="complemento" />
        </InputGroup>
        <ButtonsContainer>
          <LargeBtn text="Continuar com o pagamento" />
          <div onClick={() => dispatch(close())}>
            <LargeBtn text="Voltar para o carrinho" />
          </div>
        </ButtonsContainer>
      </Container>
      {/* <Container>
        <div className="formCheckout">
          <TabTitle>Pagamento - Valor a pagar R$ 190,90</TabTitle>
          <InputGroup>
            <label htmlFor="nomeCompleto">Nome no cartão</label>
            <input type="text" id="nomeCompleto" />
          </InputGroup>
          <div className="input-flex">
            <InputGroup maxWidth="228px">
              <label htmlFor="endereco">Número do cartão</label>
              <input type="text" id="endereco" />
            </InputGroup>
            <InputGroup maxWidth="87px">
              <label htmlFor="cidade">CVV</label>
              <input type="text" id="cidade" />
            </InputGroup>
          </div>
          <div className="input-flex">
            <InputGroup maxWidth="140px">
              <label htmlFor="cep">Mês de vencimento</label>
              <input type="text" id="cep" />
            </InputGroup>
            <InputGroup maxWidth="140px">
              <label htmlFor="numero">Ano de vencimento</label>
              <input type="text" id="numero" />
            </InputGroup>
          </div>
          <ButtonsContainer>
            <LargeBtn text="Finalizar pagamento" />

            <LargeBtn text="Voltar para a edição de endereço" />
          </ButtonsContainer>
        </div>
      </Container> */}
      {/* <div className="confirma-pedido">
        <TabTitle>Pedido realizado - ORDER_ID</TabTitle>
        <TextoConcluir>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido. <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </TextoConcluir>
        <ButtonsContainer>
          <LargeBtn text="Concluir" />
        </ButtonsContainer>
      </div> */}
    </>
  )
}

export default CheckoutForms
