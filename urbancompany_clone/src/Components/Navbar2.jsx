import { Box, Center,Text,Grid,Image} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
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
                w={{ base: "18%", lg: "30%" }}
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



// w={
//                 id == 2
//                   ? { base: "15%", lg: "24%" }
//                   : { base: "18%", lg: "30%" } && id == 8
//                   ? { base: "25%", lg: "40%" }
//                   :w= {{ base: "18%", lg: "30%" }}
//               }