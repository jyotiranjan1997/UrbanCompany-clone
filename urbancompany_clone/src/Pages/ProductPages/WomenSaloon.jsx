import React, { useState } from "react";
import {
  Box,
  Grid,
  Flex,
  Image,
  Button,
  Spacer,
  Show,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { selection1, subSelection1 } from "../../db";
import Reviews from "../../CustomerReviews/Reviews";
import { HashLink as Link } from "react-router-hash-link";
import EachProducts from "./EachProducts";
import Carousel from "../Craousel/Crasousel";
import Carousels from "../Craousel/Crasousel";
import CartPagee from "./CartPage";

export default function WomenSaloon() {
  const [Price, setPrice] = useState(0);

  const handleIt = () => {
    setPrice("");
  };

  const handleAdd = (price) => {
    let pr = "";
    for (let i = 0; i < price.length; i++) {
      if (
        price[i] == "1" ||
        price[i] === "2" ||
        price[i] === "3" ||
        price[i] === "4" ||
        price[i] === "5" ||
        price[i] === "6" ||
        price[i] === "7" ||
        price[i] === "8" ||
        price[i] === "9" ||
        price[i] === "0"
      ) {
        pr += price[i];
      }
    }

    setPrice(Price + +pr);
  };
  return (
    <Container maxW="full" p={9}>
      <Flex
        w="full"
        alignItems="center"
        gap="2"
        p={3}
        pt={0}
        pl="40px"
        pr="40px"
        justifyContent="space-between"
        textUnderlinePosition="under"
      >
        <Box>
          <Link to="/">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1648463875565-a4ce06.svg"
              w="100%"
            />
          </Link>
        </Box>
        <Spacer />
        <Show breakpoint="(min-width: 1000px)">
          <Flex gap="5">
            <Center>
              <Link>Blog</Link>
            </Center>
            <Center>
              <Link>Register As A Professional</Link>
            </Center>
          </Flex>
        </Show>

        <Box></Box>
      </Flex>
      <Divider />
      <Container maxW="full" p={4}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Heading>Women Salon</Heading>
          </Box>
          <Box>
            <Carousels />
          </Box>
        </Grid>
        <Divider borderWidth="2px" />
      </Container>

      <Container
        maxW="full"
        sx={{
          position: "-webkit-sticky",
          /* Safari */ position: "sticky",
          top: "0",
        }}
        zIndex="5"
      >
        <Grid
          justifyContent="center"
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(10, 1fr)" }}
          bg="white"
          p={2}
          mt="20px"
          rounded="md"
        >
          <Link to="#bestsellerspackages" smooth>
            <Box w="100%" p={2} _hover={{ bg: "#E2E8F0" }} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1663925040892-c7fc42.jpeg"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">BestSellers Packages</Text>
            </Box>
          </Link>
          <Link to="#Make" smooth>
            <Box w="100%" p={2} _hover={{ bg: "#E2E8F0" }} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1635313403372-16db5c.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px" noOfLines={2}>
                Make your own Packages
              </Text>
            </Box>
          </Link>
          <Link to="#waxing" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655977998579-8de14b.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Waxing</Text>
            </Box>
          </Link>
          <Link to="#Facial" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Facial & Cleanup</Text>
            </Box>
          </Link>
          <Link to="#Manicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287465245-e4dca0.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Manicure</Text>
            </Box>
          </Link>
          <Link to="#Pedicure" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287464682-7ab5c1.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Pedicure</Text>
            </Box>
          </Link>
          <Link to="#Threading" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287464206-1f4ad4.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Threading & Face wax</Text>
            </Box>
          </Link>
          <Link to="#Bleach" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480991-344026.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Bleach & detan</Text>
            </Box>
          </Link>
          <Link to="#Haircolour" smooth>
            <Box w="100%" _hover={{ bg: "#E2E8F0" }} p={2} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287475795-1630ef.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Hair colour & care</Text>
            </Box>
          </Link>
        </Grid>
        <Divider orientation="horizontal" />
      </Container>
      <Flex mt="20px">
        <Box w="full">
          <EachProducts
            id={"bestsellerspackages"}
            heading={subSelection1[0]}
            products={selection1[0].BestsellerPackages}
            handleAdd={handleAdd}
          />
          <EachProducts
            id={"Make"}
            heading={subSelection1[1]}
            products={selection1[1].Makeyourownpackage}
            handleAdd={handleAdd}
          />
          <EachProducts
            id={"waxing"}
            heading={subSelection1[2]}
            products={selection1[2].Waxing}
            handleAdd={handleAdd}
          />
          <EachProducts
            id={"Facial"}
            heading={subSelection1[3]}
            products={selection1[3].Facial}
            handleAdd={handleAdd}
          />
          <EachProducts
            id={"Manicure"}
            heading={subSelection1[4]}
            products={selection1[4].Manicure}
            handleAdd={handleAdd}
          />
          <EachProducts
            id={"Pedicure"}
            heading={subSelection1[5]}
            products={selection1[5].Pedicure}
            handleAdd={handleAdd}
          />
          <EachProducts
            id={"Threading"}
            heading={subSelection1[6]}
            products={selection1[6].Threading}
            handleAdd={handleAdd}
          />

          <Reviews />
        </Box>

        <Divider orientation="vertical" />

        <VStack w="full"> </VStack>
      </Flex>
      <Flex
        gap="50px"
        p={8}
        ml="65%"
        mt="40%"
        display={Price == 0 ? "none" : "flex"}
        sx={{
          position: "-webkit-sticky",
          /* Safari */ position: "fixed",
          top: "0",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Heading>₹ {Price}</Heading>

        <Button bg="blue.400">
          <CartPagee total={Price} handleit={handleIt} />
        </Button>
      </Flex>
      <Grid bg="black" color="white" p={6} templateColumns="repeat(4, 1fr)">
        <Box>
          <Image
            w="30%"
            src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
          />
        </Box>
        <Box>
          <Text>© 2014-22 UrbanClap Technologies India Pvt. Ltd.</Text>
        </Box>
      </Grid>
    </Container>
  );
}
