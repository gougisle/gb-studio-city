import React from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@mui/material";

import "../styles/comingsoon.scss";

const SchedulePage = () => {
  return (
    <Layout>
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
          {/* <img src={coneImage} style={{ height: "300px" }}></img> */}
          <Typography variant="h3" mb={2}>
            Coming Soon...
          </Typography>
          <Typography variant="h5">
            This page is currently under development. Please come back later.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default SchedulePage;

export const Head = () => <title>GB | Studio City</title>;
