import React from "react";
import Typography from "@mui/material/Typography";

const SectionTitle = ({ title }) => {
  return (
    <Typography variant="h4" textAlign={"center"} fontWeight={"bold"} my={3}>
      {title}
    </Typography>
  );
};

export default SectionTitle;
