import React from "react";
import { Box, Typography, Container } from "@mui/material";
import FooterTitle from "./footerTitle";
import GracieBarraLogo from "../images/Gracie_Barra_Logo.png";
import { gracieBlue } from "../utils/siteThemeColors";
import { publicInfo } from "../utils/publicContent";
import ClickableEmailLink from "./clickableEmailLink";
import { navigate } from "gatsby";

const Footer = () => {
  const navToHome = () => {
    navigate("/");
  };
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
            display: "flex",
            justifyContent: "center",
          }}
          onClick={navToHome}
        >
          <img
            style={{ height: 150, width: 150, cursor: "pointer" }}
            src={GracieBarraLogo}
            alt="Gracie Barra Logo"
          />
        </Box>
        {/* FOOTER 2 - LOCATION */}
        <Box>
          <FooterTitle title={"LOCATION"} />
          <p>
            <Typography variant="body1" className="link-plain footer-link">
              <a
                target="_blank"
                rel="noreferrer"
                href={publicInfo.googleMapsUrl}
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
              <ClickableEmailLink></ClickableEmailLink>
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
              <a href={publicInfo.facebookUrl} target="_blank" rel="noreferrer">
                {" "}
                <i>Facebook</i>
              </a>
            </Typography>
          </p>
          <p>
            <Typography variant="body1" className="footer-link">
              <i>Twitter</i>{" "}
            </Typography>
          </p>
          <p>
            <Typography variant="body1" className="footer-link">
              <a
                href={publicInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <i>Instagram</i>
              </a>
            </Typography>
          </p>
          <p>
            <Typography variant="body1" className="footer-link">
              <a
                target="_blank"
                rel="noreferrer"
                href={publicInfo.googleMapsUrl}
              >
                <i>Google</i>
              </a>{" "}
            </Typography>
          </p>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
