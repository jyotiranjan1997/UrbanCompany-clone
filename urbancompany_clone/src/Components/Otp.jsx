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
  Spinner,
  PinInputField,
  HStack,
  PinInput,
    Container,
    Center,
  Text
} from "@chakra-ui/react";
import React from "react";

export default function Otp({verifyOtp}) {
  const [otp, setOtp] = React.useState("");
 
  const handleClick = (e) => {
    e.preventDefault();
    verifyOtp(otp);
  }
 
  return (
    <>
      <Container mt="20px">
        <Text fontSize="20px">Enter your Verified Otp </Text>
        <Text fontSize="20px">Send to Your Mobile Number</Text>
      </Container>

      <Container>
        <HStack>
          <PinInput size="md">
            <PinInputField onChange={(e) => setOtp(otp + e.target.value)} />
            <PinInputField onChange={(e) => setOtp(otp + e.target.value)} />
            <PinInputField onChange={(e) => setOtp(otp + e.target.value)} />
            <PinInputField onChange={(e) => setOtp(otp + e.target.value)} />
            <PinInputField onChange={(e) => setOtp(otp + e.target.value)} />
            <PinInputField onChange={(e) => setOtp(otp + e.target.value)} />
          </PinInput>
        </HStack>
        <Center>
          <Button onClick={handleClick} bg="blue.300" mt="50px">
            Verify Otp
          </Button>
        </Center>
      </Container>
    </>
  );
  }
