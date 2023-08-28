import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const cubosCollection = collection(db, "cubos");

    getDocs(cubosCollection).then((querySnapshot) => {
      const cubos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(cubos);
    });
  }, []);

  return (
    <div>
      <ItemDetail cubos={data} />
    </div>
  );
};

export default ItemDetailContainer;
