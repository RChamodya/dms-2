import React from "react";
import { Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        // backgroundColor: "#f8f9fa"
        backgroundColor: "#000",
        // backgroundColor: "#026C45",
        opacity: ".90",
        display: "fixed",
        position: "absolute",
        left: "0",
        bottom: "0",
        right: "0",
      }}
    >
      <Container>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{
            padding: "10px",
            // borderTop: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link href="#" color="gray" underline="hover">
            Easy Documents @{new Date().getFullYear()}
          </Link>{" "}
          {/* @{new Date().getFullYear()} */}
        </Typography>
        {/* <Typography
          variant="body2"
          color="gray"
          align="center"
          sx={{ marginTop: "5px", marginBottom: "10px", paddigBottom: "10px" }}
        >
          <Link href="#" color="inherit" underline="hover">
            About
          </Link>
          {" | "}
          <Link href="#" color="inherit" underline="hover">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="#" color="inherit" underline="hover">
            Licensing
          </Link>
          {" | "}
          <Link href="#" color="inherit" underline="hover">
            Contact
          </Link>
        </Typography> */}
      </Container>
    </footer>
  );
};

export default Footer;
