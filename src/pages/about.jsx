import React from "react";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import SectionTitle from "../components/sectionTitle";
import TeamMemberCard from "../components/teamMemberCard";
import { teamMembers } from "../utils/publicContent";

const About = () => {
  return (
    <Layout>
      <Box mb={5} mx={{ xs: 3, md: 15 }} className="tester-style">
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
