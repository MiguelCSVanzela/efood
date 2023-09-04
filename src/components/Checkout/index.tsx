import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import Button from '../Button'

import { RootReducer } from '../../store'
import { clear, outCheckout } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [cardPayment, setCardPayment] = useState(false)

  const form = useFormik({
    initialValues: {
      receiverName: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiverName: Yup.string()
        .min(5, 'O nome precisa ter ao menos 5 carácteres')
        .required('Campo obrigatório'),
      description: Yup.string()
        .min(10, 'Minimo de 10 caractéres para o seu endereço')
        .required('Campo Obrigatório'),
      city: Yup.string()
        .min(3, 'Minimo de 3 caractéres para nome da cidade')
        .required('Campo Obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP deve conter 9 carácteres')
        .max(9, 'O CEP deve conter 9 carácteres')
        .required('Campo Obrigatório'),
      number: Yup.string()
        .min(1, 'Ao menos 1 caráctere')
        .max(4, 'Até 4 carácteres')
        .required('Campo Obrigatório'),
      complement: Yup.string(),
      nameCard: Yup.string().when((values, schema) =>
        cardPayment ? schema.required('Campo Obrigatório') : schema
      ),
      numberCard: Yup.string().when((values, schema) =>
        cardPayment ? schema.required('Campo Obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        cardPayment ? schema.required('Campo Obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        cardPayment ? schema.required('Obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        cardPayment ? schema.required('Obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: itens.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.receiverName,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const cleanCloseCart = () => {
    dispatch(clear())
    dispatch(outCheckout())
  }

  const comeBackCart = () => {
    dispatch(outCheckout())
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <S.Container>
      {isSuccess && data ? (
        <S.Card>
          <S.Title>Pedido realizado - {data.orderId}</S.Title>
          <div>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </div>
          <Button onClick={cleanCloseCart} theme="sky">
            Concluir
          </Button>
        </S.Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {cardPayment ? (
            <>
              <S.Card>
                <S.Title>Pagamento - Valor a pagar R$ 190,90</S.Title>

                <S.InputGroup>
                  <label htmlFor="nameCard">Nome no cartão</label>
                  <input
                    type="text"
                    id="nameCard"
                    name="nameCard"
                    value={form.values.nameCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('nameCard') ? 'error' : ''}
                  />
                  <S.Error>
                    {getErrorMessage('nameCard', form.errors.nameCard)}
                  </S.Error>
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup max-width="228px">
                    <label htmlFor="numberCard">Número no cartão</label>
                    <InputMask
                      mask="9999 9999 9999 9999"
                      type="text"
                      id="numberCard"
                      name="numberCard"
                      value={form.values.numberCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('numberCard') ? 'error' : ''
                      }
                    />
                    <S.Error>
                      {getErrorMessage('numberCard', form.errors.numberCard)}
                    </S.Error>
                  </S.InputGroup>
                  <S.InputGroup max-width="87px">
                    <label htmlFor="cvv">CVV</label>
                    <InputMask
                      mask="999"
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cvv') ? 'error' : ''}
                    />
                    <S.Error>{getErrorMessage('cvv', form.errors.cvv)}</S.Error>
                  </S.InputGroup>
                </S.Row>

                <S.Row>
                  <S.InputGroup max-width="155px">
                    <label htmlFor="expiresMonth">Mês de Vencimento</label>
                    <InputMask
                      mask="99"
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                    <S.Error>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </S.Error>
                  </S.InputGroup>
                  <S.InputGroup max-width="155px">
                    <label htmlFor="expiresYear">Ano de Vencimento</label>
                    <InputMask
                      mask="9999"
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                    />
                    <S.Error>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </S.Error>
                  </S.InputGroup>
                </S.Row>
              </S.Card>
              <Button theme="sky" type="submit">
                {isLoading ? 'Finalizando Compra...' : 'Finalizar Pagamento'}
              </Button>
              <S.ButtonNav onClick={() => setCardPayment(false)}>
                Voltar para a edição do endereço
              </S.ButtonNav>
            </>
          ) : (
            <>
              <S.Card>
                <S.Title>Entrega</S.Title>
                <S.InputGroup>
                  <label htmlFor="receiverName">Quem irá receber</label>
                  <input
                    type="text"
                    id="receiverName"
                    name="receiverName"
                    value={form.values.receiverName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('receiverName') ? 'error' : ''
                    }
                  />
                  <S.Error>
                    {getErrorMessage('receiverName', form.errors.receiverName)}
                  </S.Error>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="description">Endereço</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={form.values.description}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('description') ? 'error' : ''}
                  />
                  <S.Error>
                    {getErrorMessage('description', form.errors.description)}
                  </S.Error>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                  <S.Error>{getErrorMessage('city', form.errors.city)}</S.Error>
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      mask="99999-999"
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="number">Número</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
              </S.Card>
              <S.ButtonNav onClick={() => setCardPayment(true)}>
                Continuar com o pagamento
              </S.ButtonNav>
              <S.ButtonNav onClick={comeBackCart}>
                Voltar para o carrinho
              </S.ButtonNav>
            </>
          )}
        </form>
      )}
    </S.Container>
  )
}

export default Checkout
