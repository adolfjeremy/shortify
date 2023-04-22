import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                padding: "50px 8%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <IconButton
                    aria-label="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/adolfjeremy"
                >
                    <GitHubIcon sx={{ fill: "#000" }} />
                </IconButton>
                <IconButton
                    aria-label="email"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:jeremy.nainggolan15@gmail.com"
                >
                    <EmailIcon sx={{ fill: "#000" }} />
                </IconButton>
            </Box>
            <Typography
                sx={{ color: "#fff", fontSize: "1rem", fontWeight: 500 }}
            >
                &copy; Jeremy Nainggolan
            </Typography>
        </Box>
    );
}

export default Footer;
