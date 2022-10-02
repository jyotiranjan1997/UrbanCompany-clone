import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
    AlertDialogOverlay,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  
  Button,
  
} from "@chakra-ui/react";
import UpdatingToastExample2 from "./BelowAlert2";

export default function CartPagee({total,handleIt}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button bg="blue.400" onClick={onOpen}>
        View Cart
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Order Placing
            </AlertDialogHeader>

            <AlertDialogBody>Total Amount:{total}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button bg="blue.400" onClick={onClose} ml={3}>
                <UpdatingToastExample2 handleIt={handleIt} />
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
