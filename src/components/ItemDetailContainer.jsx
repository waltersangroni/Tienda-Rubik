import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [cubo, setCubo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const cuboRef = doc(db, "cubos", `${id}`);

    getDoc(cuboRef).then((snapshot) => {
      if (snapshot.exists()) {
        const cuboData = { id: snapshot.id, ...snapshot.data() };
        setCubo(cuboData);
        setLoading(false);
      } else {
        console.log("El documento no existe");
      }
    });
  }, [id]);

  return <div>{loading ? <Loading /> : <ItemDetail cubo={cubo} />}</div>;
};
export default ItemDetailContainer;
