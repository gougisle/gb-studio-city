import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SectionTitle from "../components/sectionTitle";
import { publicInfo } from "../utils/publicContent";
import ClickableEmailLink from "../components/clickableEmailLink";
import { gracieRed } from "../utils/siteThemeColors";

const Contact = () => {
  const iframeRef = useRef(null);

  // State to track the height of the iframe
  const [iframeHeight] = useState(340); // default height

  // Function to adjust iframe height
  const adjustIFrameHeight = (height) => {
    if (iframeRef.current) {
      iframeRef.current.style.height = `${height + 30}px`;
    }
  };

  useEffect(() => {
    // Event listener for postMessage
    const handleMessage = (event) => {
      console.log(event.data);
      if (event.data.action === "gbMembersAdjustIFrame") {
        adjustIFrameHeight(event.data.height);
      }
    };
    window.addEventListener("message", handleMessage);
    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Layout>
      <Box my={5} mx={{ xs: 3, md: 15 }}>
        <SectionTitle title="Contact Info" />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            marginBottom: 5,
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
                {publicInfo.phone}
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
                <ClickableEmailLink></ClickableEmailLink>
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
                  {publicInfo.address}
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>

        <SectionTitle title="Connect With Us" />
        <Box
          style={{
            display: "flex",
            maxWidth: "800px",
            height: "100%",
            margin: "auto",
          }}
          className="gb-widget-wraper"
        >
          <iframe
            title="GB Studio City Widget"
            id="gbbookatrial"
            ref={iframeRef}
            src="https://services.gbmembers.net/gbcalendar-1.0/calendar.htm?space=studiocity"
            style={{ width: "100%", border: `2px solid ${gracieRed}` }}
            height={iframeHeight}
            allowFullScreen
          />
        </Box>
      </Box>
    </Layout>
  );
};
export default Contact;
export const Head = () => <title>GB | Contact</title>;

// import React, { useState } from "react";
// import Layout from "../components/layout";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
// import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import SectionTitle from "../components/sectionTitle";
// import { publicInfo } from "../utils/publicContent";
// import { gracieRed } from "../utils/siteThemeColors";
// import ClickableEmailLink from "../components/clickableEmailLink";
// import toastr from "toastr";
// import "toastr/build/toastr.min.css";

// toastr.options = {
//   closeButton: false,
//   debug: false,
//   newestOnTop: false,
//   progressBar: false,
//   positionClass: "toast-top-center",
//   preventDuplicates: false,
//   onclick: null,
//   showDuration: "300",
//   hideDuration: "1000",
//   timeOut: "5000",
//   extendedTimeOut: "1000",
//   showEasing: "swing",
//   hideEasing: "linear",
//   showMethod: "fadeIn",
//   hideMethod: "fadeOut",
// };
// const DEFAULT_FORM = {
//   name: "",
//   email: "",
//   phone: "",
//   message: "",
//   class: "",
// };

// const Contact = () => {
//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     class: "",
//   });

//   const [formLoading, setFormLoading] = useState(false);

//   const handleFormValueChange = (e) => {
//     console.log(e.target.name);
//     const input = e.target.value;
//     const inputName = e.target.name;

//     setFormValues((prev) => {
//       let newState = { ...prev };
//       newState[inputName] = input;
//       return newState;
//     });
//   };

//   const sendFormValues = async (e) => {
//     e.preventDefault();
//     setFormLoading(true);

//     const url = process.env.GATSBY_SHEETY_API_KEY;
//     let body = {
//       sheet1: {
//         ...formValues,
//       },
//     };
//     await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     })
//       .then((response) => {
//         console.log("API response: ", response);
//         handleFeedback(response);
//         return response.json();
//       })
//       .then((json) => {
//         console.log("JSON: ", json);
//         setFormLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleFeedback = (requestRes) => {
//     if (requestRes.status === 200) {
//       toastr.success("We will get in touch with you soon.", "Message Sent!");
//       setFormValues(DEFAULT_FORM);
//     } else {
//       toastr.error("Something when wrong! Please try again later", "Oops...");
//     }
//   };

//   return (
//     <Layout>
//       <Box my={5} mx={{ xs: 3, md: 15 }}>
//         <SectionTitle title="Contact Us" />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column-reverse", md: "row" },
//             justifyContent: "center",
//             alignItems: "center",
//             gap: 4,
//             marginBottom: 5,
//           }}
//         >
//           <Box
//             height={400}
//             width={{ xs: 325, sm: 500, md: 500 }}
//             sx={{ boxShadow: 5 }}
//           >
//             <iframe
//               title="Gracie Barra Studio City Address"
//               width="100%"
//               height="400"
//               frameborder="0"
//               scrolling="no"
//               marginheight="0"
//               marginwidth="0"
//               src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=12323%20Ventura%20Blvd.%20Studio%20City%20CA,%2091604+(Gracie%20Barra%20Studio%20City)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//             >
//               <a href="https://www.gps.ie/">gps vehicle tracker</a>
//             </iframe>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignSelf: "flex-start",
//               gap: 3,
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <LocalPhoneRoundedIcon />
//               <Typography
//                 variant="h6"
//                 display={"inline"}
//                 className="contact-link"
//               >
//                 {publicInfo.phone}
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               {" "}
//               <AlternateEmailRoundedIcon />
//               <Typography
//                 variant="h6"
//                 display={"inline"}
//                 className="contact-link"
//               >
//                 <ClickableEmailLink></ClickableEmailLink>
//               </Typography>
//             </Box>{" "}
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               {" "}
//               <HomeRoundedIcon />
//               <Typography
//                 variant="h6"
//                 display={"inline"}
//                 className="contact-link"
//               >
//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   href={publicInfo.googleMapsUrl}
//                 >
//                   {publicInfo.address}
//                 </a>
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//         <SectionTitle title="Join a Free Trial Class Today!" />
//         <Box
//           onSubmit={sendFormValues}
//           component={"form"}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             width: "100%",
//             gap: 4,

//             padding: 3,
//           }}
//         >
//           <iframe
//             title="GB Studio City Widget"
//             id="gbbookatrial"
//             ref={iframeRef}
//             src="https://services.gbmembers.net/gbcalendar-1.0/calendar.htm?space=studiocity"
//             style={{
//               width: "100%",
//               border: `2px solid ${gracieRed}`,
//             }}
//             height={iframeHeight}
//             allowFullScreen
//           />
//         </Box>
//       </Box>
//     </Layout>
//   );
// };

// export default Contact;

// export const Head = () => <title>GB | Contact</title>;
