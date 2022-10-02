import React from "react";
import {
  Box,
  Grid,
  Flex,
  Text,
  Badge,
  Center,
  Heading,
  VStack,
  Avatar,
  Stack,
  Divider,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { selection5 } from "../db";

export default function Reviews() {
    return (
      <VStack w="full" align="flex" mt="30px" ml="30px">
        <>
          <Flex pr="5" pt="3" pb="3" justifyContent="space-between" gap="20px">
            <VStack p="6" align="flex-start" direction="row">
              <Heading>Customer Reviews </Heading>

              <Heading
                mt="10px"
                fontWeight="semibold"
                as="h3"
                lineHeight="tight"
                noOfLines={2}
              >
               Avg.user rating
              </Heading>
            </VStack>

            <Center>
              <Flex justifyContent="center" alignItems="center" gap="5px">
                <StarIcon />
                <Heading>4.75</Heading>
              </Flex>
            </Center>
          </Flex>
          <Divider borderWidth="3px" />
        </>

        {selection5.map((el) => (
          <>
            <Flex
              pr="5"
              pt="3"
              pb="3"
              justifyContent="space-between"
              gap="20px"
            >
              <VStack p="6" align="flex-start" direction="row">
                <Flex justifyContent="center" alignItems="center" gap="20px">
                  <Box display="flex" alignItems="baseline">
                    <Avatar src="https://bit.ly/broken-link" />
                  </Box>
                  <Flex direction="column" align="flex-start">
                    <Text> {el.name}</Text>
                    <Box
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      mt="5px"
                      overflow="hidden"
                      noOfLines={1}
                    >
                      {el.date}
                    </Box>
                  </Flex>
                </Flex>

                <Text
                  mt="10px"
                  fontWeight="semibold"
                  as="h3"
                  lineHeight="tight"
                  noOfLines={2}
                >
                  {el.reviews}
                </Text>
              </VStack>

              <Center>
                <Flex justifyContent="center" alignItems="center" gap="5px">
                  <StarIcon />
                  <Text>{Math.floor(Math.random() * 3) + 2}</Text>
                </Flex>
              </Center>
            </Flex>
            <Divider borderWidth="3px" />
          </>
        ))}
      </VStack>
    );
}
