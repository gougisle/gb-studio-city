import React from "react";
import { Box, Typography } from "@mui/material";
import "../styles/comingsoon.scss";

const ComingSoon = () => {
  return (
    <Box my={5} mx={{ xs: 3, md: 15 }}>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingX: 3,
        }}
        className="coming-soon-main"
        textAlign={"center"}
      >
        <Typography variant="h3" mb={2}>
          Coming Soon...
        </Typography>
        <Typography variant="h5">
          This page is currently under development. Please come back later.
        </Typography>
      </Box>
    </Box>
  );
};

export default ComingSoon;
