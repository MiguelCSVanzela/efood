import Item from "../Item";
import { ListContainer } from "./styles";
import { Restaurante } from "../../pages/Home";

type Props = {
  restaurantes: Restaurante[];
};

const List = ({ restaurantes }: Props) => {
  return (
    <ListContainer>
      <div className="container">
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Item
              id={restaurante.id}
              titulo={restaurante.titulo}
              destacado={restaurante.destacado}
              tipo={restaurante.tipo}
              descricao={restaurante.descricao}
              avaliacao={restaurante.avaliacao}
              capa={restaurante.capa}
            />
          </li>
        ))}
      </div>
    </ListContainer>
  );
};

export default List;
