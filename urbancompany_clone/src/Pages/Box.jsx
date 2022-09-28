import React from "react";
import { Box, Flex, Image, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Box1({image,title,id}) {
  return (
    <Box p={2}  variant="ghost" key={id}>
      <Link>
        <Center>
          <Image
            src={image}
            alt="logo"
            w={id == 2 ? "23%" : "30%" && id==8 ?  "40%" :"30%"  }
            
          />
        </Center>
      </Link>
      <Text mt="15px">{title}</Text>
    </Box>
  );
}
