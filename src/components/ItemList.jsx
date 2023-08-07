import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="itemlistcontainer">
      {productos.map((p) => {
        return (
          <Item
            id={p.id}
            key={p.id}
            name={p.name}
            description={p.description}
            price={p.price}
            stock={p.stock}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
