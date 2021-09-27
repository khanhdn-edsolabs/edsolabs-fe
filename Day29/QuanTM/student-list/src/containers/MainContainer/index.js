import React from "react";
import { Box } from "@mui/system";

export default function MainContainer({ children }) {
  return (
    <Box component="main" p={5}>
      {children}
    </Box>
  );
}
