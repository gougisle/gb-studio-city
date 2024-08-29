import React from "react";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import SectionTitle from "../components/sectionTitle";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import fabioPhoto from "../images/fabio-blue-gi-medals.jpg";
import { gracieRed } from "../utils/siteThemeColors";

const imageStyles = {
  width: "100%",
  boxShadow: "5px 5px 5px grey",
  borderRadius: "10px",
};
const About = () => {
  return (
    <Layout>
      <Box mb={5} mx={{ xs: 3, md: 15 }}>
        <SectionTitle title="Meet the Team" />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                style={imageStyles}
                src={fabioPhoto}
                alt="Fabio Trindade, Head Instructor at Gracie Barra Studio City"
              ></img>
            </Grid>
            <Grid item xs md>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" fontWeight={"bold"} color={gracieRed}>
                  <i>Fabio Trindade</i>
                </Typography>
                <Typography variant="h6" fontWeight={"bold"}>
                  <i>Head Instructor</i>
                </Typography>
                <Typography variant="body1">
                  <p>
                    Fabio Trindade, born in Manaus, Amazonas, Brazil, is a
                    highly accomplished Brazilian Jiu￾Jitsu practitioner and
                    instructor. With an impressive track record spanning over 27
                    years, Fabio has left an indelible mark on the BJJ
                    community.
                  </p>
                  <p>
                    Fabio began his BJJ journey at Monteiro Jiu-Jitsu, where he
                    trained diligently from white belt to black belt. His
                    esteemed professors include the Monteiro Brothers—Fábio,
                    Guto, Yano, and Lucio. Throughout his career, Fabio has
                    secured numerous championship titles, including being a
                    7-time Jiu-Jitsu State Champion in Amazonas, Brazil, a
                    3-time Brazil National Champion, a South American Champion,
                    3-time World Champion, and 2-time American Champion. He has
                    also excelled in Nogi Jiu-Jitsu, winning the state
                    championship three times.
                  </p>
                  <p>
                    As a black belt, Fabio has dedicated 20 years to both
                    competing and teaching. His teaching philosophy emphasizes
                    technical excellence, conceptual understanding,
                    adaptability, respect, and mental toughness. Fabio fosters a
                    sense of community within his academy, where students
                    support each other and learn not only the physical
                    techniques but also the deeper principles of BJJ.
                  </p>
                  <p>
                    Fabio Trindade’s remarkable journey exemplifies dedication,
                    skill, and a love for martial arts.
                  </p>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;

export const Head = () => <title>GB | About</title>;
