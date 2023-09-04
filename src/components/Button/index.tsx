import { ButtonContainer } from './styles'

export type Props = {
  children: string | string[]
  theme: 'normal' | 'sky'
  onClick?: () => void
  disabled?: boolean
  type?: string
}

const Button = ({ theme, children, onClick, disabled, type }: Props) => (
  <ButtonContainer
    type={type}
    disabled={disabled}
    onClick={onClick}
    theme={theme}
  >
    {children}
  </ButtonContainer>
)

export default Button
