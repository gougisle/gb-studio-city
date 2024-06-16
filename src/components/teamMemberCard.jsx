import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  lightGrey,
  gracieRed,
  gracieBlueFaded,
} from "../utils/siteThemeColors";
import "../styles/teammembercard.scss";

const teamMemberImageSX = { width: 250, height: 250, borderRadius: 5 };
const teamCardSX = {
  transition: "300ms all",
  "&:hover": { transform: "scale(1.07)", backgroundColor: gracieBlueFaded },
};

const TeamMemberCard = ({ name, role, description, image }) => {
  return (
    <Paper elevation={3} className="team-cad " sx={teamCardSX}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          margin: 3,
          wdith: "100%",
        }}
      >
        <Box>
          <img
            style={teamMemberImageSX}
            alt="Headshot of Gracie Barra Studio City teacher"
            src={image}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 3,
          }}
        >
          <Typography variant="h5" color={gracieRed} fontWeight={"bold"}>
            <i> {name}</i>
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            <i>{role}</i>
          </Typography>

          <Typography variant="body1" color={lightGrey}>
            {" "}
            <p>{description} </p>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default TeamMemberCard;
