import React from "react";
import Layout from "../components/layout";
import { Box, Typography, TextField, Button, FormControl } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import SectionTitle from "../components/sectionTitle";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { gracieRed } from "../utils/siteThemeColors";

const Contact = () => {
  return (
    <Layout>
      <Box mb={5} mx={{ xs: 3, md: 15 }}>
        <SectionTitle title="Contact Info" />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            marginBottom: 4,
          }}
        >
          <Box
            height={400}
            width={{ xs: 325, sm: 500, md: 500 }}
            sx={{ boxShadow: 5 }}
          >
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=12323%20Ventura%20Blvd.%20Studio%20City%20CA,%2091604+(Gracie%20Barra%20Studio%20City)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-start",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <LocalPhoneRoundedIcon />
              <Typography variant="h6" display={"inline"} color={gracieRed}>
                <i>(111) 222-3333</i>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              {" "}
              <AlternateEmailRoundedIcon />
              <Typography variant="h6" display={"inline"} color={gracieRed}>
                <i>info@gbstudiocity.com</i>
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              {" "}
              <HomeRoundedIcon />
              <Typography variant="h6" display={"inline"} color={gracieRed}>
                <i>12323 Ventura Blvd, Studio City, CA 91604</i>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CONTACT FORM */}

        <SectionTitle title="Connect With Us" />
        <Box
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 4,
          }}
        >
          <FormControl>
            <TextField
              id="name"
              name="name"
              variant="outlined"
              label="Name"
              size="normal"
            />
          </FormControl>
          <FormControl>
            {" "}
            <TextField
              id="email"
              name="email"
              variant="outlined"
              label="Email"
            />
          </FormControl>
          <FormControl>
            {" "}
            <TextField
              id="phone"
              name="phone"
              variant="outlined"
              label="Phone"
            />
          </FormControl>
          <FormControl>
            <TextField
              id="message"
              name="message"
              variant="outlined"
              label="Message"
            />
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              What class are you interested in?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="adult"
              name="radio-buttons-group"
              row
            >
              {" "}
              <FormControlLabel
                value="adult"
                control={<Radio />}
                label="Adult"
              />
              <FormControlLabel
                value="children"
                control={<Radio />}
                label="Children"
              />
              <FormControlLabel
                value="women"
                control={<Radio />}
                label="Women's"
              />
            </RadioGroup>
          </FormControl>

          <Button variant="contained" color="error">
            Send Message
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;

export const Head = () => <title>Contact Page</title>;
