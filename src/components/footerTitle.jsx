import React from "react";
import Typography from "@mui/material/Typography";

const FooterTitle = ({ title }) => {
  return (
    <Typography variant="h6" mb={1} fontWeight={"bold"}>
      <i>{title}</i>
    </Typography>
  );
};

export default FooterTitle;
