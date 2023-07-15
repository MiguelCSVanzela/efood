import { ButtonContainer } from "./styles";

export type Props = {
  children: string;
  theme: "vermelho" | "bege";
};

const Button = ({ theme, children }: Props) => (
  <ButtonContainer theme={theme}>{children}</ButtonContainer>
);

export default Button;
