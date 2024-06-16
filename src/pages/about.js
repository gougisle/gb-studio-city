import React from "react";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { teamMembers } from "../utils/publicContent";
import SectionTitle from "../components/sectionTitle";
import TeamMemberCard from "../components/teamMemberCard";
//import teamPhoto from "../images/stock_bjj_team.png";

const About = () => {
  return (
    <Layout>
      <Box mb={5} mx={{ xs: 3, md: 15 }} className="tester-style">
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SectionTitle title="About Gracie Barra Studio City" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ultrices dui sapien eget mi proin sed libero enim. Lorem dolor
                sed viverra ipsum nunc aliquet bibendum. Id neque aliquam
                vestibulum morbi blandit cursus risus at. Lobortis scelerisque
                fermentum dui faucibus in ornare quam. Imperdiet sed euismod
                nisi porta lorem mollis aliquam ut. Phasellus egestas tellus
                rutrum tellus pellentesque.
              </p>

              <p>
                Lacus sed viverra tellus in hac. Dictum at tempor commodo
                ullamcorper. Quis lectus nulla at volutpat. Consectetur libero
                id faucibus nisl tincidunt eget nullam non nisi. Malesuada
                pellentesque elit eget gravida cum sociis natoque. Tempor orci
                eu lobortis elementum. Faucibus et molestie ac feugiat sed
                lectus vestibulum.
              </p>
              <p>
                Mattis nunc sed blandit libero. In arcu cursus euismod quis
                viverra nibh. Neque egestas congue quisque egestas diam in arcu
                cursus euismod. Pulvinar etiam non quam lacus suspendisse
                faucibus interdum posuere lorem. Ac turpis egestas sed tempus
                urna. Rutrum quisque non tellus orci ac auctor. Blandit libero
                volutpat sed cras ornare arcu dui vivamus. Diam maecenas
                ultricies mi eget mauris pharetra et ultrices. Vel facilisis
                volutpat est velit egestas. Libero enim sed faucibus turpis in
                eu mi bibendum. Phasellus vestibulum lorem sed risus ultricies.
              </p>
            </Typography>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SectionTitle title="Meet the Team" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
            mt={2}
          >
            {teamMembers.map((member) => {
              return (
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  image={member.image}
                ></TeamMemberCard>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;

export const Head = () => <title>GB Studio City</title>;
