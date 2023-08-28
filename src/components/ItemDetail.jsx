import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ cubo }) => {
  return (
    <Flex>
      <div key={cubo.id}>
        <Card maxW="sm">
          <CardBody className="card-container">
            <Stack mt="6" spacing="3">
              <Heading size="md">{cubo.name}</Heading>
              <img src={cubo.image} alt="" />
              <Text>{cubo.description}</Text>
              <Text color="black" fontSize="2xl">
                ${cubo.price}
              </Text>
            </Stack>
          </CardBody>
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
    </Flex>
  );
};

export default React.memo(ItemDetail);
