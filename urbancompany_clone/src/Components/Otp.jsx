import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  PinInputField,
  HStack,
  PinInput,
    Container,
    Center,
  Text
} from "@chakra-ui/react";
import React from "react";

export default function Otp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [loginPage, setLoginPage] = React.useState(true);

  React.useEffect(() => {}, [loginPage]);

  const handleLogin = () => {
    setLoginPage(!loginPage);
  };

  return loginPage ? (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Container mt="20px">
              <Text fontSize="20px">Enter your Verified Otp </Text>
              <Text fontSize="20px">Send to Your Mobile Number</Text>
            </Container>
          </DrawerHeader>

          <DrawerBody>
            <Container>
              <HStack>
                <PinInput size="lg">
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Container>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Back
            </Button>
            <Button colorScheme="blue" onClick={() => handleLogin}>
              Login
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  ) : (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        Login/SignUp
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Please Login to Continue</DrawerHeader>

          <DrawerBody>
            <FormLabel> Enter your Name</FormLabel>
            <InputGroup>
              <Input type="text" placeholder="Enter full Name" />
            </InputGroup>
            <FormLabel> Enter Mobile Number </FormLabel>
            <InputGroup>
              <InputLeftAddon children="+91" />
              <Input type="tel" placeholder="phone number" />
            </InputGroup>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => handleLogin}>
              Login
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
