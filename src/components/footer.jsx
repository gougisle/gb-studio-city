import React from "react";
import { Box, Typography, Container } from "@mui/material";
import FooterTitle from "./footerTitle";
import logo from "../images/icon.png";
import { gracieBlue, gracieRed } from "../utils/siteThemeColors";
import { publicInfo } from "../utils/publicContent";

const Footer = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, md: 0 },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-evenly" },
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "start" },
          paddingY: 4,
          backgroundColor: gracieBlue,
          color: "white",
        }}
        classNames="footer-container"
      >
        {/* FOOTER 1 - LOGO */}
        <Box
          sx={{
            //width: 200,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: 125, width: 125 }}
            src={logo}
            alt="Gracie Barra Logo"
          />
        </Box>
        {/* FOOTER 2 - LOCATION */}
        <Box>
          <FooterTitle title={"LOCATION"} />
          <p>
            <Typography variant="body1" className="footer-link">
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href="https://www.google.com/maps/place/12323+Ventura+Blvd,+Studio+City,+CA+91604/@34.1432169,-118.4042984,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2bdfafdfeab6f:0x51a977c6556326e3!8m2!3d34.1432169!4d-118.4017235!16s%2Fg%2F11c3q44k6l?entry=ttu"
              >
                <i>{publicInfo.address}</i>
              </a>
            </Typography>
          </p>
        </Box>
        {/* FOOTER 3 - CONTACT */}
        <Box>
          <FooterTitle title={"CONTACT US"} />
          <p>
            <Typography variant="body1" className="footer-link">
              <i>{publicInfo.email}</i>
            </Typography>
          </p>
          <p>
            <Typography variant="body1" className="footer-link">
              {" "}
              <i>{publicInfo.phone}</i>
            </Typography>
          </p>
        </Box>
        {/* FOOTER 4 - SOCIALS */}
        <Box>
          <FooterTitle title={"SOCIALS"} />
          <p>
            <Typography variant="body1" className="footer-link">
              <i>Facebook</i>
            </Typography>
          </p>
          <p>
            <Typography variant="body1" className="footer-link">
              <i>Twitter</i>
            </Typography>
          </p>
          <p>
            <Typography variant="body1" className="footer-link">
              <i>Instagram</i>
            </Typography>
          </p>
          <p>
            <Typography variant="body1" className="footer-link">
              <i>Google</i>
            </Typography>
          </p>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
