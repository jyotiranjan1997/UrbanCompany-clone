import {
  Heading,
  Box,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Home.css";
import Box1 from "./Box";

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

export default function Home() {
  return (
    <div>
      <div className="Body">
        <div className="Navbar">
          <Navbar/>
          <Text p={2} mt="10%">
            <Link to="/"> Home/ </Link>
          </Text>
          <Heading p={2} size={["xl", "xl" ,"2xl"]} noOfLines={1}>
            Home Services, on demand.
          </Heading>
          <Box p={9}>
            <Input
              size="md"
              w={["20%","20%","40%"]}
              p={8}
              bg="white"
              placeholder="Search Services"
            />
          </Box>
        </div>
        <div className="color_overlay"></div>
      </div>
      <div id="box1">
        <Flex
          gap="6"
          justifyContent="center"
          bg="white"
          p={6}
          mt="20px"
          boxShadow="2xl"
          rounded="md"
        >
          {arr.map((el) => (
            <Box1 image={el.image} title={el.title} id={el.ID} />
          ))}
        </Flex>
      </div>
      <div id="box2">
        <Heading mb="5%">Home Services</Heading>
        <Flex
          gap="10"
          justifyContent="center"
          bg="white"
          p={7}
          mt="20px"
          boxShadow="2xl"
          rounded="md"
        >
          {arr2.map((el, i) => (
            <Box1 image={el.image} title={el.title} id={el.ID} />
          ))}
        </Flex>
      </div>
    </div>
  );
}
