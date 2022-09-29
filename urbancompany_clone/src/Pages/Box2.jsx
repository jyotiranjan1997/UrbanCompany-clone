import React from "react";
import { Box, Flex, Image, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Box1({ image, title, id }) {
  return (
    <Box
      w="100%"
      p={{ base: 0, lg: 2 }}
      _hover={{ bg: "#E2E8F0" }}
      variant="ghost"
      key={id}
    >
      <Link>
        <Center>
          <Image
            boxSize="200px"
            objectFit="cover"
            src={image}
            alt="logo"
            w={id === "6" ? "50%" : "100%" }
            h={id === "6" ? "10%" : "40%"}
          />
        </Center>
      </Link>
      <Text mt="15px">{title}</Text>
    </Box>
  );
}
