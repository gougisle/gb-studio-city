import React from "react";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import landingImage from "../images/pexels-rdne-8612017.jpg";
import aboutImage from "../images/pexels-rdne-7045743.jpg";
import guyKickingImage from "../images/pexels-pixabay-260447.jpg";
import { navigate } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Box
          sx={{
            background: `url(${landingImage})`,
            backgroundSize: "100%",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            color: "white",
            height: "100vh",
            paddingX: { xs: 3, md: 15 },
          }}
        >
          <Typography variant="h2" fontWeight={"bold"}>
            Welcome to Gracie Barra Studio City
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ paddingY: 2, paddingX: 5, fontSize: "larger" }}
          >
            {" "}
            Sign Up for a free Class
          </Button>
          <Typography variant="h5" textAlign={"center"}>
            Empowering minds, bodies, and spirits in Studio City through the Jiu
            Jitsu, Muay Thai and Fitness. Join us to discover discipline,
            confidence, and community in every training session.
          </Typography>
        </Box>

        {/* SCHEDULE SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            marginX: { xs: 2, md: 40 },
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Typography variant="h4" fontWeight={"bold"}>
            <i> Schedule</i>
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            Gracie Barra welcomes anyone who values discipline, wellness,
            martial arts, self-defense, respect, and is looking for a
            well-balanced lifestyle.
          </Typography>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              navigate("/schedule");
            }}
          >
            View the Schedule <ArrowForwardIcon />
          </Button>{" "}
        </Box>
        {/* ABOUT US SECTION */}
        <Box
          sx={{
            display: "flex",
            my: 3,
            px: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={0}
              md={12}
              lg={6}
              display={{ xs: "none", md: "block" }}
            >
              <img
                src={aboutImage}
                style={{
                  height: "100%",
                  width: "100%",
                  boxShadow: "3px 3px 3px grey",
                }}
              />
            </Grid>
            <Grid item xs={12} md lg>
              {" "}
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginX: 5,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  <i>About Gracie Barra Studio City</i>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1" textAlign={"center"}>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ultrices dui sapien eget mi proin sed libero enim.
                      Lorem dolor sed viverra ipsum nunc aliquet bibendum. Id
                      neque aliquam vestibulum morbi blandit cursus risus at.
                      Lobortis scelerisque fermentum dui faucibus in ornare
                      quam. Imperdiet sed euismod nisi porta lorem mollis
                      aliquam ut. Phasellus egestas tellus rutrum tellus
                      pellentesque.
                    </p>
                  </Typography>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Sign Up for Class <ArrowForwardIcon />
                  </Button>{" "}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* OUR INSTRUCTORS SECTION */}
        <Box
          sx={{
            display: "flex",
            my: 3,
            px: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={0}
              md={12}
              lg={6}
              display={{ xs: "none", md: "block" }}
              order={2}
            >
              <img
                src={guyKickingImage}
                style={{
                  height: "100%",
                  width: "100%",
                  boxShadow: "3px 3px 3px grey",
                }}
              />
            </Grid>
            <Grid item xs={12} md lg>
              {" "}
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginX: 5,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  <i>Expert Instructors & Mentors</i>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1" textAlign={"center"}>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ultrices dui sapien eget mi proin sed libero enim.
                      Lorem dolor sed viverra ipsum nunc aliquet bibendum. Id
                      neque aliquam vestibulum morbi blandit cursus risus at.
                      Lobortis scelerisque fermentum dui faucibus in ornare
                      quam. Imperdiet sed euismod nisi porta lorem mollis
                      aliquam ut. Phasellus egestas tellus rutrum tellus
                      pellentesque.
                    </p>
                  </Typography>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    Meet The Team <ArrowForwardIcon />
                  </Button>{" "}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
