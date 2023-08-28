import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";
import ItemCount from "./ItemCount";

const ItemDetail = ({}) => {
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

  return (
    <Flex>
      {loading ? (
        <Loading />
      ) : (
        <div key={cubo.id}>
          <Card maxW="sm">
            <CardBody className="card-container">
              <Stack mt="6" spacing="3">
                <Heading size="md">{cubo.name}</Heading>
                <img src={cubo.image} alt="" />
                <Text>{cubo.description}</Text>
                <Text>{cubo.categoria}</Text>
                <Text color="black" fontSize="2xl">
                  {cubo.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ItemCount
                name={cubo.name}
                price={cubo.price}
                id={cubo.id}
                stock={cubo.stock}
              />
            </CardFooter>
          </Card>
        </div>
      )}
    </Flex>
  );
};

export default React.memo(ItemDetail);
