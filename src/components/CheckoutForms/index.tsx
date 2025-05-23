import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikProps
} from 'formik'
import * as Yup from 'yup'
import { close } from '../../store/reducers/checkout'

import LargeBtn from '../LargeBtn'
import {
  ButtonsContainer,
  Container,
  InputGroup,
  LargeBtnSubmit,
  TabTitle,
  TextoConcluir
} from './styles'

// --- Tipagem do formulário ---
type DeliveryAddress = {
  description: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

type Delivery = {
  receiver: string
  address: DeliveryAddress
}

type CardExpires = {
  month: string
  year: string
}

type Card = {
  name: string
  number: string
  code: string
  expires: CardExpires
}

type Payment = {
  card: Card
}

type FormValues = {
  delivery: Delivery
  payment: Payment
}

const initialValues: FormValues = {
  delivery: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    }
  },
  payment: {
    card: {
      name: '',
      number: '',
      code: '',
      expires: {
        month: '',
        year: ''
      }
    }
  }
}

const validationSchema = Yup.object({
  delivery: Yup.object({
    receiver: Yup.string().required('Quem irá receber é obrigatório'),
    address: Yup.object({
      description: Yup.string().required('Endereço é obrigatório'),
      city: Yup.string().required('Cidade é obrigatória'),
      zipCode: Yup.string().required('CEP é obrigatório'),
      number: Yup.string().required('Número é obrigatório'),
      complement: Yup.string()
    }).required()
  }).required(),
  payment: Yup.object({
    card: Yup.object({
      name: Yup.string().required('Nome no cartão é obrigatório'),
      number: Yup.string().required('Número do cartão é obrigatório'),
      code: Yup.string().required('CVV é obrigatório'),
      expires: Yup.object({
        month: Yup.string()
          .required('Mês de vencimento é obrigatório')
          .matches(/^(0?[1-9]|1[0-2])$/, 'Mês inválido'),
        year: Yup.string()
          .required('Ano de vencimento é obrigatório')
          .matches(/^\d{4}$/, 'Ano inválido (ex: 2025)')
      }).required()
    }).required()
  }).required()
})

const CheckoutForms: React.FC = () => {
  const dispatch = useDispatch()
  const [isDeliveryOk, setIsDeliveryOk] = useState(false)

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (!isDeliveryOk) {
      // Se estiver na etapa de entrega, valida e passa para pagamento
      setIsDeliveryOk(true)
      actions.setTouched({}) // resetar erros
    } else {
      // Etapa pagamento: aqui você pode disparar o submit final
      console.log('Enviar para API:', values)
      // resetar o form ou fechar modal se quiser
      dispatch(close())
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnBlur
      validateOnChange={false}
    >
      {({ errors, touched, isSubmitting }: FormikProps<FormValues>) => (
        <Form>
          {isDeliveryOk ? (
            <Container>
              <div className="formCheckout">
                <TabTitle>Pagamento - Valor a pagar R$ 190,90</TabTitle>

                <InputGroup>
                  <label htmlFor="payment.card.name">Nome no cartão</label>
                  <Field name="payment.card.name" type="text" />
                  <ErrorMessage name="payment.card.name" component="div" />
                </InputGroup>

                <div className="input-flex">
                  <InputGroup maxWidth="228px">
                    <label htmlFor="payment.card.number">
                      Número do cartão
                    </label>
                    <Field name="payment.card.number" type="text" />
                    <ErrorMessage name="payment.card.number" component="div" />
                  </InputGroup>

                  <InputGroup maxWidth="87px">
                    <label htmlFor="payment.card.code">CVV</label>
                    <Field name="payment.card.code" type="text" />
                    <ErrorMessage name="payment.card.code" component="div" />
                  </InputGroup>
                </div>

                <div className="input-flex">
                  <InputGroup maxWidth="140px">
                    <label htmlFor="payment.card.expires.month">
                      Mês de vencimento
                    </label>
                    <Field name="payment.card.expires.month" type="text" />
                    <ErrorMessage
                      name="payment.card.expires.month"
                      component="div"
                    />
                  </InputGroup>

                  <InputGroup maxWidth="140px">
                    <label htmlFor="payment.card.expires.year">
                      Ano de vencimento
                    </label>
                    <Field name="payment.card.expires.year" type="text" />
                    <ErrorMessage
                      name="payment.card.expires.year"
                      component="div"
                    />
                  </InputGroup>
                </div>

                <ButtonsContainer>
                  <LargeBtnSubmit type="submit" disabled={isSubmitting}>
                    Finalizar pagamento
                  </LargeBtnSubmit>
                  <div onClick={() => setIsDeliveryOk(false)}>
                    <LargeBtn text="Voltar para a edição de endereço" />
                  </div>
                </ButtonsContainer>
              </div>
            </Container>
          ) : (
            <Container>
              <TabTitle>Entrega</TabTitle>

              <InputGroup>
                <label htmlFor="delivery.receiver">Quem irá receber</label>
                <Field name="delivery.receiver" type="text" />
                <ErrorMessage name="delivery.receiver" component="div" />
              </InputGroup>

              <InputGroup>
                <label htmlFor="delivery.address.description">Endereço</label>
                <Field name="delivery.address.description" type="text" />
                <ErrorMessage
                  name="delivery.address.description"
                  component="div"
                />
              </InputGroup>

              <InputGroup>
                <label htmlFor="delivery.address.city">Cidade</label>
                <Field name="delivery.address.city" type="text" />
                <ErrorMessage name="delivery.address.city" component="div" />
              </InputGroup>

              <div className="input-flex">
                <InputGroup maxWidth="140px">
                  <label htmlFor="delivery.address.zipCode">CEP</label>
                  <Field name="delivery.address.zipCode" type="text" />
                  <ErrorMessage
                    name="delivery.address.zipCode"
                    component="div"
                  />
                </InputGroup>

                <InputGroup maxWidth="140px">
                  <label htmlFor="delivery.address.number">Número</label>
                  <Field name="delivery.address.number" type="text" />
                  <ErrorMessage
                    name="delivery.address.number"
                    component="div"
                  />
                </InputGroup>
              </div>

              <InputGroup>
                <label htmlFor="delivery.address.complement">
                  Complemento (opcional)
                </label>
                <Field name="delivery.address.complement" type="text" />
              </InputGroup>

              <ButtonsContainer>
                <LargeBtnSubmit
                  onClick={() => setIsDeliveryOk(true)}
                  type="submit"
                >
                  Continuar com o pagamento
                </LargeBtnSubmit>
                <div onClick={() => dispatch(close())}>
                  <LargeBtn text="Voltar para o carrinho" />
                </div>
              </ButtonsContainer>
            </Container>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default CheckoutForms
