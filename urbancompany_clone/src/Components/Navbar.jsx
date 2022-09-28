import { Box, Flex, HStack,Image,Spacer} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    


    return (
      <Flex
        w="full"
        alignItems="center"
        gap="2"
        p={5}
        pl="40px"
        pr="40px"
        justifyContent="space-between"
        bg="transperent"
      >
        <Box>
          <Link to="/">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
              w={["10%","20%","30%"]}
            />
          </Link>
        </Box>
        <Spacer />
        {
          <Box  >
            <Flex gap="5">
              <Link>Blog</Link>
              <Link>Register As A Professional</Link>
              <Link>Login/SignUp</Link>
            </Flex>
          </Box>  }
      </Flex>
    );
}