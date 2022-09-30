import React from "react";
import {
  Box,
  Grid,
  Flex,
  Image,
  Button,
  Spacer,
  Show,
  Hide,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Badge,
  Center,
  Container,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
export default function ProductPage() {
    const [data, setData] = React.useState([]);
    
    React.useEffect(() => {
        axios
          .get("http://localhost:3002/selection1")
          .then((res) => setData(res.data))
          .catch((err) => console.log("data_not" + err));
        
    },[])

  return (
    <Container maxW="full" p={9}>
      <Flex
        w="full"
        alignItems="center"
        gap="2"
        p={3}
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
        {/* <Hide above="1000px">
          <Popover>
            <PopoverTrigger>
              <Button>
                <HamburgerIcon w={8} h={8} onClick={handleSideBar} />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />

              <PopoverBody color="black">
                <Grid gap="20px" p={8}>
                  <Link>Blog</Link>
                  <Link>Register As A Professional</Link>
                  <Link>
                    <Login />
                  </Link>
                </Grid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Hide> */}
        <Box></Box>
      </Flex>
      <hr />
      <Container maxW="full" p={9}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        >
          <Box>
            <Heading>Women Salon</Heading>
          </Box>
          <Box>
            <video>
              <source src="https://content.urbanclap.com/videos/growth/luminosity/1656934896109-0686ed/1656934896109-0686ed.m3u8?q=1664557578250" />
            </video>
          </Box>
        </Grid>
      </Container>

      <Container
        maxW="full"
        sx={{
          position: "-webkit-sticky",
          /* Safari */ position: "sticky",
          top: "0",
        }}
      >
        <Grid
          gap="5"
          justifyContent="center"
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(12, 1fr)" }}
          bg="white"
          p={3}
          mt="20px"
          rounded="md"
        >
          <Link to="/products">
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
          <Link to="/products">
            <Box w="100%" p={2} _hover={{ bg: "#E2E8F0" }} variant="ghost">
              <Center>
                <Image
                  rounded={"md"}
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1635313403372-16db5c.png"
                  alt="logo"
                />
              </Center>

              <Text mt="15px">Make your own Packages</Text>
            </Box>
          </Link>
          <Link to="/products">
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
          <Link to="/products">
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
          <Link to="/products">
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
          <Link to="/products">
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
          <Link to="/products">
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
          <Link to="/products">
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
          <Link to="/products">
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
        <hr></hr>
      </Container>
      <HStack p={8}>
        <Heading> Bestseller Packages</Heading>
        <Box>
          {data.map((el) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Text> PACKAGE</Text>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {el.name}
              </Box>

              <Box>
                <StarIcon color="gray.400" />
                {el.rating}
                <Box as="span" color="gray.600" fontSize="sm">
                  (190K)
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </HStack>
    </Container>
  );
}
