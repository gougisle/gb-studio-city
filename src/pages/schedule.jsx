import React from "react";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import SectionTitle from "../components/sectionTitle";
import schedulePdf from "../downloads/Schedule_GBSC.pdf";
import { StaticImage } from "gatsby-plugin-image";
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
            <StaticImage
              src="../images/Schedule_GBSC.jpg"
              alt="Weekly Schedule"
              placeholder="blurred"
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
