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
  Text
} from "@chakra-ui/react";
import React,{Component, useEffect} from "react";
import Otp from "./Otp"
import { auth } from "../FireBase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";

export default function Login() {
    let { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [loginPage, setLoginPage] = React.useState(false);
  const [mobile, setMobile] = React.useState("");

  const handleInput = (e) => {
    setMobile(e.target.value);
}
//   function recaptch(mobile) {
   
//     console.log(mobile);
//   let recaptcha = new RecaptchaVerifier("recaptcha-container", {}, auth);
//     recaptcha.render();
//     return signInWithPhoneNumber(auth, mobile, recaptch);
// }

  
  
//   const auth = getAuth();
//   const phoneNumber = getPhoneNumberFromUserInput();
//   const appVerifier = window.recaptchaVerifier;
// signInWithPhoneNumber(auth, phoneNumber, recaptch)
//   .then((confirmationResult) => {
//     // SMS sent. Prompt user to type the code from the message, then sign the
//     // user in with confirmationResult.confirm(code).
//     window.confirmationResult = confirmationResult;
//     // ...
//   })
//   .catch((error) => {
//     // Error; SMS not sent
//     // ...
//   });
 

  const handleLogin = (mobile) => {
    
   
    let recaptcha = new RecaptchaVerifier("recaptcha-container", {}, auth);
    recaptcha.render();
    
const phoneNumber ="91"+mobile ;
const appVerifier = window.recaptcha;
   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
     .then((confirmationResult) => {
       console.log(confirmationResult);
       // SMS sent. Prompt user to type the code from the message, then sign the
       // user in with confirmationResult.confirm(code).
       window.confirmationResult = confirmationResult;
       // ...
     })
     .catch((error) => {
       // Error; SMS not sent
       console.log(error);
       // ...
     });
  };
  
  
    return (
      <div style={{ display: loginPage ? "none" : "block" }}>
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
                <Input
                  type="tel"
                  placeholder="phone number"
                  value={mobile}
                  onChange={handleInput}
                />
              </InputGroup>
            </DrawerBody>

            <div id="recaptcha-container" />

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={()=>handleLogin(mobile)}  >
                <Otp />
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );

    
}



//
//
//
