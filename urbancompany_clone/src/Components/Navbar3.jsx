import { Box, Center, Text, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
let arr = [
  {
    ID: "5",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    title: "Appliance Repair",
  },
  {
    ID: "6",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",
    title: "Home Painting",
  },
  {
    ID: "7",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
    title: "Cleaning & Pest",
  },
  {
    ID: "8",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png",
    title: "Disinfection",
  },
  {
    ID: "9",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
    title: "Home Repairs",
  },
];

export default function Navbar2() {
  return (
    <Grid
      gap="6"
      justifyContent="center"
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
      bg="white"
      p={{ base: 3, lg: 6 }}
      mt="20px"
      boxShadow="2xl"
      rounded="md"
    >
      <Link to="/products">
        <Box
          w="100%"
          p={{ base: 0, lg: 2 }}
          _hover={{ bg: "#E2E8F0" }}
          variant="ghost"
          key={arr[0].ID}
        >
          <Center>
            <Image
              src={arr[0].image}
              alt="logo"
              w={{ base: "18%", lg: "30%" }}
            />
          </Center>

          <Text mt="15px">{arr[0].title}</Text>
        </Box>
      </Link>
      <Link to="/products">
        <Box
          w="100%"
          p={{ base: 0, lg: 2 }}
          _hover={{ bg: "#E2E8F0" }}
          variant="ghost"
          key={arr[1].ID}
        >
          <Center>
            <Image
              src={arr[1].image}
              alt="logo"
              w={{ base: "18%", lg: "30%" }}
            />
          </Center>

          <Text mt="15px">{arr[1].title}</Text>
        </Box>
      </Link>
      <Link to="/products">
        <Box
          w="100%"
          p={{ base: 0, lg: 2 }}
          _hover={{ bg: "#E2E8F0" }}
          variant="ghost"
          key={arr[2].ID}
        >
          <Center>
            <Image
              src={arr[2].image}
              alt="logo"
              w={{ base: "15%", lg: "24%" }}
            />
          </Center>

          <Text mt="15px">{arr[2].title}</Text>
        </Box>
      </Link>
      <Link to="/products">
        <Box
          w="100%"
          p={{ base: 0, lg: 2 }}
          _hover={{ bg: "#E2E8F0" }}
          variant="ghost"
          key={arr[3].ID}
        >
          <Center>
            <Image
              src={arr[3].image}
              alt="logo"
              w={{ base: "25%", lg: "40%" }}
            />
          </Center>

          <Text mt="15px">{arr[3].title}</Text>
        </Box>
      </Link>
      <Link to="/products">
        <Box
          w="100%"
          p={{ base: 0, lg: 2 }}
          _hover={{ bg: "#E2E8F0" }}
          variant="ghost"
          key={arr[4].ID}
        >
          <Center>
            <Image
              src={arr[4].image}
              alt="logo"
              w={{ base: "18%", lg: "30%" }}
            />
          </Center>

          <Text mt="15px">{arr[4].title}</Text>
        </Box>
      </Link>
    </Grid>
  );
}
