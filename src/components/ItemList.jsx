import React from "react";
import Item from "./Item";

const ItemList = ({ cubos }) => {
  return (
    <div className="itemlistcontainer">
      {cubos.map((cubo) => (
        <Item
          id={cubo.id}
          key={cubo.id}
          name={cubo.name}
          image={cubo.image}
          description={cubo.description}
          price={cubo.price}
          stock={cubo.stock}
          categoria={cubo.categoria}
        />
      ))}
    </div>
  );
};

export default React.memo(ItemList);
