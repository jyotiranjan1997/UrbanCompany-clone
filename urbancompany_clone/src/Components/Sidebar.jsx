import {
    Fade,
    Button,
    Box,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";

export default function ScaleFadeEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Login/SignUp</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Fade
        </Box>
      </ScaleFade>
    </>
  );
}
