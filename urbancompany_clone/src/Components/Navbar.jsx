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
  Center
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
  const handleSideBar = () => {};

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
            w="30%"
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

          <Link>
            <Center>
              <Login />
            </Center>
          </Link>
        </Flex>
      </Show>
      <Hide above="1000px">
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
      </Hide>
      <Box></Box>
    </Flex>
  );
}
