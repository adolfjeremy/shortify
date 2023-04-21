import React from "react";
import { Button } from "@mui/material";
import hero from "../Images/hero.png";

function Hero() {
    return (
        <section className="hero">
            <div className="hero_cta">
                <div className="hero_cta_text">
                    <h1>Link Shortener</h1>
                    <p>
                        Shorten your links
                        <br />
                        with ease
                    </p>
                </div>
                <Button
                    variant="contained"
                    size="large"
                    href="#shortener"
                    sx={{
                        fontFamily: "Averia Libre, cursive",
                        fonSize: "1.085rem",
                        fontWeight: 400,
                        color: "#fff",
                        padding: "14px 20px",
                        borderRadius: "15px",
                        textTransform: "capitalize",
                    }}
                >
                    Shortify now
                </Button>
            </div>
            <img src={hero} alt="hero" />
        </section>
    );
}

export default Hero;
