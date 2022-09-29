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
  Container
} from "@chakra-ui/react";
import React,{Component} from "react";
import Otp from "./Otp";
import firebase from "../FireBase";

export default function Login() {
    let { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [loginPage, setLoginPage] = React.useState(false);
  const [mobile, setMobile] = React.useState("");

  const handleInput = (e) => {
    setMobile(e.target.value);
}


  const handleLogin = () => {
    // let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    // let number = mobile ;
    // firebase.auth().signWithPhoneNumber(number, recaptcha).then((e)=>{
    //   let code = promt('enter the otp', "");
    //   if (code == null) return;
    //   e.confirm(code).then((res) => {
    //     console.log(res.user)
    //   })
    // })
        
    };
  
    return  (<>
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
                            <Input type="tel" placeholder="phone number" value={mobile}  onChange={handleInput}  />
                        </InputGroup>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={() => handleLogin}>
                            <Otp/>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )

    
}



//
//
//
