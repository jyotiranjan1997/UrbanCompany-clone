import {
  Heading,
  Box,
  Flex,
  Input,
  Text,
  Grid,
  HStack,
  Container,
  Image,
  Center,
  VStack,
  GridItem
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Home.css";
import Box1 from "./Box";
import Box2 from "./Box2";

let arr = [
  {
    ID: "0",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
    title: "Salon for Women",
  },
  {
    ID: "1",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png",
    title: "Hair, Skin & Nails",
  },
  {
    ID: "2",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
    title: "Women's Therapies",
  },
  {
    ID: "3",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
    title: "Saloon for Men",
  },
  {
    ID: "4",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
    title: "Men's Therapies",
  },
];
let arr2 = [
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

let arr3 = [
  {
    ID: "5",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg",
    title: "Expert Counceling",
    sub_title: "Advance skin Treatment",
  },
  {
    ID: "6",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg",
    title: "Furniture Making, Upholstery & Polish",
  },
  {
    ID: "8",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
    title: "Air Purifier",
    sub_title: "Flat 100",
  },
  {
    ID: "9",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg",
    title: "Buy RO Water Purifier",
  },
];

let arr4 = [
  {
    ID: "12",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png",
    title: "Geyser",
    sub_title: "Starts at ₹249",
  },
  {
    ID: "13",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png",
    title: "Water Purifier",
    sub_title: "Up to 45% Off",
  },
  {
    ID: "14",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
    title: "Air Purifier",
    sub_title: "Flat ₹100 off",
  },
];

let arr5 = [
  {
    ID: "18",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png",
    title: "Solon Luxe",
  },
  {
    ID: "19",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png",
    title: "Solon For Men Royale",
  },
  {
    ID: "20",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png",
    title: "Spa Luxe",
  },
  {
    ID: "21",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png",
    title: "Massage Therapy for Men Royale",
  },
];

let arr6 = [
  {
    ID: "30",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg",
    title: "Furniture Making, Upholstery & Polish",
  },
  {
    ID: "31",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
    title: "Carpenters",
  },
  {
    ID: "32",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg",
    title: "Electricians",
  },
  {
    ID: "33",
    image:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg",
    title: "Plumbers",
  },
];

export default function Home() {
  return (
    <div className="total">
      <div className="Body">
        <div className="Navbar">
          <Navbar />
          <Text p={2} mt="5%">
            <Link to="/"> Home/ </Link>
          </Text>
          <Heading p={2} size={["25px", "xl", "2xl"]} noOfLines={1}>
            Home Services, on demand.
          </Heading>
          <Box p={9}>
            <Input
              // size="md"
              w={["80%", "60%", "35%"]}
              size={["sm", "md", "md"]}
              p={8}
              bg="white"
              placeholder="Search Services"
            />
          </Box>
        </div>
        <div className="color_overlay"></div>
      </div>
      <Flex justifyContent="center" gap="10%" alignItems="center" bg="white">
        <Container
          maxW={{ base: "container.sm", md: "500px", lg: "1000px" }}
          position="absolute"
          top="470px"
        >
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
            {arr.map((el) => (
              <Box1 image={el.image} title={el.title} id={el.ID} />
            ))}
          </Grid>
        </Container>

        <Container
          maxW={{ base: "container.sm", md: "500px", lg: "1000px" }}
          mt={{ base: "70%", md: "50%", lg: "15%" }}
          p={8}
        >
          <Heading mb="15%">Home Services</Heading>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
            gap={{ base: 4, lg: 10 }}
            justifyContent="center"
            bg="white"
            p={{ base: 3, lg: 6 }}
            mt="20px"
            boxShadow="2xl"
            rounded="md"
          >
            {arr2.map((el, i) => (
              <Box1 image={el.image} title={el.title} id={el.ID} />
            ))}
          </Grid>
        </Container>
      </Flex>
      <Flex
        mt="20px"
        bg="white"
        p={8}
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="1000px">
          <Grid templateColumns="repeat(4, 1fr)">
            <Box cursor="pointer">
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1662377264033-320229.png"
                w="90%"
              />
            </Box>
            <Box>
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1662377264033-320229.png"
                w="90%"
              />
            </Box>
            <Box>
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1662377264033-320229.png"
                w="90%"
              />
            </Box>
            <Box>
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1662377264033-320229.png"
                w="90%"
              />
            </Box>
          </Grid>
        </Container>
      </Flex>

      <Flex
        mt="20px"
        bg="white"
        p={8}
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="1000px">
          <Heading p={8}>New Category Launches</Heading>
          <Grid templateColumns="repeat(4, 1fr)" p={9}>
            {arr3.map((el) => (
              <Box2 image={el.image} title={el.title} id={el.ID} />
            ))}
          </Grid>
        </Container>
      </Flex>

      <Flex
        mt="20px"
        bg="white"
        p={8}
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="1000px">
          <Heading p={8}>Appliances</Heading>
          <Text fontSize="sm">
            Servcing,Repairing,Installation & Uninstallation
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" p={9}>
            {arr4.map((el) => (
              <Box2 image={el.image} title={el.title} id={el.ID} />
            ))}
          </Grid>
        </Container>
      </Flex>

      <Flex
        mt="20px"
        bg="white"
        p={8}
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="1000px">
          <Heading p={8}>UC Luxury Experience</Heading>
          <Text fontSize="sm">
            Top Professional | Best Brands | Premium Exprencie
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" p={9}>
            {arr5.map((el) => (
              <Box2 image={el.image} title={el.title} id={el.ID} />
            ))}
          </Grid>
        </Container>
      </Flex>

      <Flex
        mt="20px"
        bg="white"
        p={8}
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="1000px">
          <Heading p={8}>Home Repairs</Heading>

          <Grid templateColumns="repeat(4, 1fr)" p={9}>
            <Box
              w="100%"
              p={{ base: 0, lg: 2 }}
              _hover={{ bg: "#E2E8F0" }}
              variant="ghost"
            >
              <Link>
                <Center>
                  <Image
                    boxSize="200px"
                    objectFit="cover"
                    src={arr6[0].image}
                    alt="logo"
                    w="50%"
                  />
                </Center>
              </Link>
              <Text mt="15px">{arr6[0].title}</Text>
            </Box>
            <Box
              w="100%"
              p={{ base: 0, lg: 2 }}
              _hover={{ bg: "#E2E8F0" }}
              variant="ghost"
              key={arr6[0].ID}
            >
              <Link>
                <Center>
                  <Image
                    boxSize="200px"
                    objectFit="cover"
                    src={arr6[1].image}
                    alt="logo"
                    w="50%"
                  />
                </Center>
              </Link>
              <Text mt="15px">{arr6[1].title}</Text>
            </Box>
            <Box
              w="100%"
              p={{ base: 0, lg: 2 }}
              _hover={{ bg: "#E2E8F0" }}
              variant="ghost"
              key={arr6[1].ID}
            >
              <Link>
                <Center>
                  <Image
                    boxSize="200px"
                    objectFit="cover"
                    src={arr6[2].image}
                    alt="logo"
                    w="100%"
                  />
                </Center>
              </Link>
              <Text mt="15px">{arr6[2].title}</Text>
            </Box>
            <Box
              w="100%"
              p={{ base: 0, lg: 2 }}
              _hover={{ bg: "#E2E8F0" }}
              variant="ghost"
              key={arr6[2].ID}
            >
              <Link>
                <Center>
                  <Image
                    boxSize="200px"
                    objectFit="cover"
                    src={arr6[3].image}
                    alt="logo"
                    w="60%"
                  />
                </Center>
              </Link>
              <Text mt="15px">{arr6[3].title}</Text>
            </Box>
          </Grid>
        </Container>
      </Flex>
      <Box bg="white" p={7} mt="15px">
        <Link>
          <Image
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1979/t_high_res_template/categories/category_v2/category_a4e46fa0.png"
            alt="image"
          />
        </Link>
      </Box>
      <Box bg="white" p={7} mt="15px">
        <Image
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1979/t_high_res_template/categories/category_v2/category_3cffdf20.png"
          alt="footer_image"
        />
      </Box>

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
        <Box>
          <Flex>
            <Image
              w="4%"
              src="https://diylogodesigns.com/wp-content/uploads/2016/05/instagram-Logo-PNG-Transparent-Background-download.png"
            />
            {/* <Image
              w="4%"
              src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
              alt="twiiter"
            />
            <Image
              w="4%"
              src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
              alt="twiiter"
            />
            <Image
              w="4%"
              src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
              alt="twiiter"
            /> */}
          </Flex>
        </Box>
        <Box>
          <Image
            w="4%"
            src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
            alt="twiiter"
          />
        </Box>
      </Grid>
    </div>
  );
}








//New Catagory & Lunches
//https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg
//https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg
//https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg
//https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg



