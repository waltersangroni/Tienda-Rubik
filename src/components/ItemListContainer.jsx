import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
  const [cubos, setCubos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "cubos");
    getDocs(itemCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCubos(docs);
      setLoading(false);
    });
  }, []);

  const { categoria } = useParams();

  let filteredCubos = [];

  if (categoria == "catalogo") {
    filteredCubos = cubos;
  } else {
    filteredCubos = cubos.filter((cubos) => cubos.categoria === categoria);
  }

  return <>{loading ? <Loading /> : <ItemList cubos={filteredCubos} />}</>;
};

export default ItemListContainer;
