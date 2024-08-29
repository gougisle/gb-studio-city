import React from "react";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button } from "@mui/material";
import SectionTitle from "../components/sectionTitle";
import scheduleImage from "../images/Schedule_GBSC_Image.jpg";
import schedulePdf from "../downloads/Schedule_GBSC.pdf";
import "../styles/comingsoon.scss";

const scheduleImgStyles = {
  width: "100%",
  height: "100%",
  border: " 2px solid black",
};

const SchedulePage = () => {
  return (
    <Layout>
      <Box my={5} mx={{ xs: 3, md: 15 }}>
        <SectionTitle title="Weekly Schedule" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box mb={3}>
            <Button variant="contained" color="error">
              <a href={schedulePdf} download target="_blank">
                <Box display={"flex"}>
                  Download PDF <FileDownloadIcon />
                </Box>
              </a>
            </Button>
          </Box>

          <Box sx={{ maxWidth: "950px", margin: "auto" }}>
            <img
              src={scheduleImage}
              alt="Weekly Class schedule"
              style={scheduleImgStyles}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default SchedulePage;

export const Head = () => <title>GB | Schedule</title>;
