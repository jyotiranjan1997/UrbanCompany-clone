import { Button, Stack, useToast } from "@chakra-ui/react";
import React from "react";
export default function UpdatingToastExample() {
  const toast = useToast();
  const toastIdRef = React.useRef();
  function addToast() {
    
    setLoading(true);
    toastIdRef.current = toast({ description: "Product added Sucessfully" });
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }
  const [loading, setLoading] = React.useState(false);
 
  return (
    <Stack isInline spacing={2}>
      <Button bg="green.300" isLoading={loading} disabled={loading} onClick={addToast} type="button">
        Add
      </Button>
    </Stack>
  );
}
