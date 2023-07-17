import { ButtonContainer } from "./styles";

export type Props = {
  children: string | string[];
  theme: "vermelho" | "bege";
  onClick?: () => void;
};

const Button = ({ theme, children }: Props) => (
  <ButtonContainer theme={theme}>{children}</ButtonContainer>
);

export default Button;
