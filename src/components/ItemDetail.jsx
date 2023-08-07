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
import { useParams, Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filteredProducts = productos.filter((producto) => producto.id == id);

  return (
    <Flex>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            <Card maxW="sm">
              <CardBody className="card-container">
                <Stack mt="6" spacing="3">
                  <Heading size="md">{p.name}</Heading>
                  <Text>{p.description}</Text>
                  <Text>{p.categoria}</Text>
                  <Text color="black" fontSize="2xl">
                    {p.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <ItemCount />
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </Flex>
  );
};

export default ItemDetail;
