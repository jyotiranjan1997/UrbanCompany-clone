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
  Alert,
  VStack,
  Spinner,
  Center,
  Text
} from "@chakra-ui/react";
import React, { Component, useContext, useEffect } from "react";
import Otp from "./Otp";
import { auth } from "../FireBase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


const reducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return { name: "", loading: true, isAuth: false, error: "" };
    case "Success":
      return { name: "", loading: false, isAuth: true, error: "" };
    case "Failure":
      return {
        name: "",
        loading: false,
        isAuth: false,
        error: "please Enter a Valid mobile Number",
      };
    case "Noinput":
      return {
        name: "",
        loading: false,
        isAuth: false,
        error: "Please Enter your Mobile number",
      };
    case "NoData":
      return {
        name: "",
        loading: false,
        isAuth: false,
        error: "Please Enter your full Name",
      };
    case "invalid":
      return {
        name: "",
        loading: false,
        isAuth: false,
        error: action.payload,
      };
     case "reset_name":
      return {
        name: action.payload,
        loading: false,
        isAuth: true,
        error: "",
      };
  
    case "reset":
      return intialState;
  }
  Default: return state;
};
const intialState = { name: "", loading: false, isAuth: false, error: "" };
export default function Login() {
  let { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [mobile, setMobile] = React.useState("");
  const [name, setName] = React.useState("");
  const [state, dispatch] = React.useReducer(reducer, intialState);
  // const { state, dispatch } = useContext(AuthContext);

  const handleInput = (e) => {
    setMobile(e.target.value);
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "Loading" });
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    if (name == "" || name == undefined) {
      dispatch({ type: "NoData" });
      return;
    }
    if (mobile == "" || mobile == undefined || mobile.length !== 10) {
      dispatch({ type: "Noinput" });
      return;
    }
    
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        dispatch({ type: "Success", payload: name });
      })
      .catch((error) => dispatch({ type: "Failure", payload: error.message }));
  };

  const verifyOtp = (otp) => {
    dispatch({ type: "Loading" });
    if (otp.length !== 6) {
      dispatch({ type: "invalid", payload: "Invalid otp Enter" });
    }
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        dispatch({ type: "reset_name",payload:name });
        return onClose();
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        dispatch({
          type: "Failure",
          payload: "Invalid otp Enter Plaese try again",
        });
      });
  };
  useEffect(() => {
    
  },[name])
  const handleLogout = (e) => {
    dispatch({ type: "reset" })
    return onOpen();
  }

  return (
    <div>
      
      <Button ref={btnRef} colorScheme="white" onClick={handleLogout}>
        {state.name=="" ? "Login/SignUp" : `${state.name}..logout` }
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
            {state.loading === true ? (
              <Center mt="30px">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />

                <Text>...Plese Wait</Text>
              </Center>
            ) : (
              <>
                <VStack
                  align="flex-start"
                  display={
                    state.isAuth === true && state.error == "" ? "grid" : "none"
                  }
                >
                  <Otp verifyOtp={verifyOtp} />
                </VStack>
                <VStack
                  align="flex-start"
                  display={
                    state.error.length == 0 && state.isAuth === false
                      ? "grid"
                      : "none"
                  }
                >
                  <FormLabel> Enter your Name</FormLabel>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Enter full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
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
                </VStack>{" "}
              </>
            )}

            <Alert display={state.error.length == 0 ? "none" : "grid"}>
              {state.error}
            </Alert>
          </DrawerBody>

          <div id="recaptcha-container" />

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                dispatch({ type: "reset" });
                return onClose();
              }}
            >
              Back
            </Button>
            <Button
              colorScheme="blue"
              isLoading={state.loading}
              disabled={state.isAuth}
              onClick={handleLogin}
            >
              Login
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
