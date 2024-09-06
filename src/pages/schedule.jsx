import React from "react";
import Layout from "../components/layout";
import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SectionTitle from "../components/sectionTitle";
import scheduleImage from "../images/Schedule_GBSC.jpg";
import schedulePdf from "../downloads/Schedule_GB_StudioCity.pdf";
import "../styles/comingsoon.scss";

const SchedulePage = () => {
  return (
    <Layout>
      <Box my={5} mx={{ xs: 3, md: 15 }}>
        <SectionTitle title={"Weekly Schedule"}></SectionTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box mb={3}>
            <Button variant="contained" color="error">
              <a href={schedulePdf} download>
                <Box sx={{ display: "flex" }}>
                  Download PDF <DownloadIcon />
                </Box>
              </a>
            </Button>
          </Box>
          <Box
            sx={{
              maxWidth: "950px",
              margin: "auto",
            }}
          >
            <img
              src={scheduleImage}
              alt="Weekly Schedule"
              style={{
                width: "100%",
                height: "auto",
                border: "2px solid black",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default SchedulePage;

export const Head = () => <title>GB | Schedule</title>;
