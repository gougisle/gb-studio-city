import React, { useState } from "react";
import Layout from "../components/layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SectionTitle from "../components/sectionTitle";
import { publicInfo } from "../utils/publicContent";
// import { Alert } from "@mui/material";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    class: "adult",
  });

  //const [alert, setAlert] = useState("");

  const handleFormValueChange = (e) => {
    console.log(e.target.name);
    const input = e.target.value;
    const inputName = e.target.name;

    setFormValues((prev) => {
      let newState = { ...prev };
      newState[inputName] = input;
      return newState;
    });
  };

  const sendFormValues = async (e) => {
    e.preventDefault();

    let body = {
      sheet1: {
        ...formValues,
      },
    };
    await fetch(process.env.REACT_APP_SHEETY_API_URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        // Do something with object
        console.log(json.signUp);
      });
  };

  //const onAlertChange = () => {};

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
              title="Gracie Barra Studio City Address"
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
              <Typography
                variant="h6"
                display={"inline"}
                className="contact-link"
              >
                <i>{publicInfo.phone}</i>
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
              <Typography
                variant="h6"
                display={"inline"}
                className="contact-link"
              >
                <i>{publicInfo.email}</i>
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
              <Typography
                variant="h6"
                display={"inline"}
                className="contact-link"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={publicInfo.googleMapsUrl}
                >
                  <i>{publicInfo.address}</i>
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CONTACT FORM */}
        {/* <Alert severity="success">This is a success Alert.</Alert> */}
        <SectionTitle title="Connect With Us" />
        <Box
          onSubmit={sendFormValues}
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
              required
              id="name"
              name="name"
              variant="outlined"
              label="Name"
              size="normal"
              value={formValues.name}
              onChange={handleFormValueChange}
            />
          </FormControl>
          <FormControl>
            {" "}
            <TextField
              required
              id="email"
              name="email"
              variant="outlined"
              label="Email"
              value={formValues.email}
              onChange={handleFormValueChange}
            />
          </FormControl>
          <FormControl>
            {" "}
            <TextField
              id="phone"
              name="phone"
              variant="outlined"
              label="Phone"
              value={formValues.phone}
              onChange={handleFormValueChange}
            />
          </FormControl>
          <FormControl>
            <TextField
              multiline
              rows={4}
              id="message"
              name="message"
              variant="outlined"
              label="Message"
              value={formValues.message}
              onChange={handleFormValueChange}
            />
          </FormControl>
          <FormControl onChange={handleFormValueChange}>
            <FormLabel id="radio-buttons-group-label">
              What class are you interested in?
            </FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              defaultValue="adult"
              name="class"
              row
            >
              {" "}
              <FormControlLabel
                defaultChecked
                value="adults"
                control={<Radio />}
                label="Adults"
              />
              <FormControlLabel
                value="children"
                control={<Radio />}
                label="Children"
              />
              <FormControlLabel
                value="women"
                control={<Radio />}
                label="Women"
              />
            </RadioGroup>
          </FormControl>

          <Button type="submit" variant="contained" color="error">
            Send Message
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;

export const Head = () => <title>Contact Page</title>;
