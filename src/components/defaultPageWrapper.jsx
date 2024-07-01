import React from "react";
import { Box, Typography } from "@mui/material";

export default function DefaultPageWrapper({ children }) {
  return (
    <Box my={5} mx={{ xs: 3, md: 15 }}>
      {children}
    </Box>
  );
}
