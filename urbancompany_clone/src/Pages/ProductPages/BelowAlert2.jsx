import { Button, Stack, useToast } from "@chakra-ui/react";
import React from "react";
export default function UpdatingToastExample2({handleIt}) {
  const toast = useToast();
  const toastIdRef = React.useRef();
  function addToast() {
    setLoading(true);
    toastIdRef.current = toast({ description: "Product Ordered Successfully" });
    handleIt();
    
  }
  const [loading, setLoading] = React.useState(false);

  return (
    <Stack isInline spacing={2}>
      <Button
        bg="blue.400"
        isLoading={loading}
        disabled={loading}
        onClick={addToast}
        type="button"
      >
        Place Order
      </Button>
    </Stack>
  );
}
