import React from "react";
import Layout from "../components/layout";
import { Box } from "@mui/material";
import ComingSoon from "../components/comingSoon";
import "../styles/comingsoon.scss";

const SchedulePage = () => {
  return (
    <Layout>
      <Box my={5} mx={{ xs: 3, md: 15 }}>
        <ComingSoon></ComingSoon>
      </Box>
    </Layout>
  );
};

export default SchedulePage;

export const Head = () => <title>GB | Schedule</title>;
