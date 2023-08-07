import React from "react";
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
import { Link } from "react-router-dom";

const Item = ({ id, categoria, name, price }) => {
  return (
    <Card maxW="sm">
      <CardBody className="card-container">
        <Text color="red.900" className="textcategoria">
          {categoria}
        </Text>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text color="black" fontSize="1x1" textAlign="right">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter className="cardfooter">
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/item/${id}`}>Detalle</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
