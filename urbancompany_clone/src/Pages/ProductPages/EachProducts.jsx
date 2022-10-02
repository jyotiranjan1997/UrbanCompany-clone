import React from "react";
import {
  Box,
  Grid,
  Flex,
  Button,
  Badge,
  Center,
  Heading,
  VStack,

} from "@chakra-ui/react";

import {  StarIcon } from "@chakra-ui/icons";
import UpdatingToastExample from "./BelowAlert";

export default function EachProducts({ heading, products,handleAdd,id }) {
  return (
    <VStack w="full" align="flex" ml="30px" id={id}>
      <Heading mb="20px" mt="25px" align="flex-start">
        {heading.name}
      </Heading>
      {products.map((el) => (
        <Flex
          borderWidth="5px"
          borderRadius="lg"
          pr="5"
          pt="3"
          pb="3"
          justifyContent="space-between"
          gap="20px"
        >
          <Grid templateColumns="repeat(1, 1fr)" maxW="full">
            <VStack p="6" align="flex-start">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  PACKAGE
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h3"
                lineHeight="tight"
                noOfLines={1}
              >
                {el.name}
              </Box>

              <Box>
                {el.price}
                <Box as="span" color="gray.600" fontSize="sm">
                  / Rs
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <StarIcon color={"gray.400"} mr="5px" /> {el.rating}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  reviews
                </Box>
              </Box>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
                noOfLines={1}
              >
                {el.details}
              </Box>
            </VStack>
          </Grid>
          <Center>
            <Button bg="green.300" onClick={() => handleAdd(el.price)}>
              <UpdatingToastExample/>
            </Button>
          </Center>
        </Flex>
      ))}
    </VStack>
  );
}
