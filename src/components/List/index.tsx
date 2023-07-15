import Item from "../Item";
import { ListContainer } from "./styles";
import ListClass from "../../models/List";

type Props = {
  list: ListClass[];
};

const List = ({ list }: Props) => {
  return (
    <ListContainer>
      <div className="container">
        {list.map((item) => (
          <Item
            key={item.id}
            infos={item.infos}
            image={item.image}
            title={item.title}
            description={item.description}
            rate={item.rate}
          />
        ))}
      </div>
    </ListContainer>
  );
};

export default List;
