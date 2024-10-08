import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import landingImage from "../images/adult_match_handshake_kneeling.jpg";
import aboutImage from "../images/children_sparring_laughs.jpg";
import fabioTeachingPhoto from "../images/fabio-teaching-1.jpeg";
import SectionTitle from "../components/sectionTitle";
import { gracieRed } from "../utils/siteThemeColors";
import { navigate } from "gatsby";

const IndexPage = () => {
  const iframeRef = useRef(null);
  const [iframeHeight] = useState(340);

  const navToContact = () => {
    navigate("/contact");
  };

  const navToSchedule = () => {
    navigate("/schedule");
  };

  const adjustIFrameHeight = (height) => {
    if (iframeRef.current) {
      iframeRef.current.style.height = `${height + 30}px`;
    }
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  useEffect(() => {
    // Event listener for postMessage
    const handleMessage = (event) => {
      console.log(event.data);
      if (event.data.action === "gbMembersAdjustIFrame") {
        adjustIFrameHeight(event.data.height);
      }
    };
    window.addEventListener("message", handleMessage);
    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <main>
      <Layout>
        <Box
          sx={{
            backgroundImage: `url(${landingImage})`,
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
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
            <Typography variant="h2" fontWeight={"bold"} textAlign={"center"}>
              Welcome to Gracie Barra Studio City
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ paddingY: 2, paddingX: 5, fontSize: "larger" }}
              onClick={scrollToBottom}
            >
              {" "}
              Sign Up for a free Class
            </Button>
            <Typography variant="h5" textAlign={"center"}>
              Empowering minds, bodies, and spirits in Studio City through the
              Jiu Jitsu, Muay Thai and Fitness. Join us to discover discipline,
              confidence, and community in every training session.
            </Typography>
          </Box>
        </Box>

        {/* SCHEDULE SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            marginX: { xs: 5, md: 20, lg: 40 },
            pt: 10,
            pb: { xs: 3, md: 10 },
          }}
        >
          <Typography variant="h4" fontWeight={"bold"}>
            Schedule
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            Gracie Barra welcomes anyone who values <b>discipline</b>,{" "}
            <b>wellness</b>, <b>self-defense</b>, and <b>respect</b>. We
            cultivate a well-balanced lifestyle through martial arts. Check our
            schedule and join a class today!
          </Typography>
          <Button color="error" variant="outlined" onClick={navToSchedule}>
            View the Schedule <ArrowForwardIcon />
          </Button>{" "}
        </Box>
        {/* ABOUT US SECTION */}
        <Box
          sx={{
            display: "flex",
            py: 3,
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
                alt="Jiu-Jitsu Student"
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
                  About Gracie Barra Studio City
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
                      Founded in September 2024 Gracie Barra Studio City emerged
                      from a deep love for the sport. Our roots follow the
                      legendary Gracie family, pioneers of Brazilian Jiu Jitsu.
                      Inspired by their legacy, we set out to create a space
                      where students of all ages and backgrounds could learn,
                      train, and thrive
                    </p>
                  </Typography>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={navToContact}
                  >
                    Connect With Us <ArrowForwardIcon />
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
            py: 3,
            px: 2,
          }}
        >
          <Grid container spacing={2}>
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
                  Expert Instruction & Mentorship
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
                      Our Head Instructor, Fabio Trindade, boasts an impressive
                      career which has earned him recognition and respect within
                      the BJJ community. A few of his accomplishments include
                      being a 7-time Jiu-Jitsu State Champion in Amazonas,
                      Brazil, 3-time Brazilian National Champion, 3-time World
                      Champion, and 2-time American Champion.
                    </p>
                    <p>
                      As a black belt, Fabio has dedicated 20 years of his life
                      to both competing and teaching the art of Jiu-Jitsu. His
                      teaching philosophy emphasizes <b>adaptability</b>,{" "}
                      <b>respect</b>, and <b>mental toughness</b>. Fabio fosters
                      a sense of community within his academy, where students
                      support each other and learn not only the physical
                      techniques but also the deeper principles of BJJ.
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
            <Grid
              item
              xs={0}
              md={12}
              lg={6}
              display={{ xs: "none", md: "block" }}
            >
              <img
                alt="Jiu Jitsu Teacher"
                src={fabioTeachingPhoto}
                style={{
                  height: "100%",
                  width: "100%",
                  boxShadow: "3px 3px 3px grey",
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box pb={4} pt={1}>
          <SectionTitle title="Join a Free Trial Class Today!" />
          <Box
            style={{
              display: "flex",
              maxWidth: "800px",
              height: "100%",
              margin: "auto",
            }}
            className="gb-widget-wraper"
          >
            <iframe
              title="GB Studio City Widget"
              id="gbbookatrial"
              ref={iframeRef}
              src="https://services.gbmembers.net/gbcalendar-1.0/calendar.htm?space=studiocity"
              style={{
                width: "100%",
                border: `2px solid ${gracieRed}`,
              }}
              height={iframeHeight}
              allowFullScreen
            />
          </Box>
        </Box>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>GB | Home</title>;
