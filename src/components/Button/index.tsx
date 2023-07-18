import { ButtonContainer } from "./styles";

export type Props = {
  children: string | string[];
  theme: "vermelho" | "bege";
  onClick?: () => void;
};

const Button = ({ theme, children, onClick }: Props) => (
  <ButtonContainer onClick={onClick} theme={theme}>
    {children}
  </ButtonContainer>
);

export default Button;
