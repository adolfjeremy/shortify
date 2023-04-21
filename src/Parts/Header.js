import React from "react";
import Logo from "../Components/Logo";

function Header() {
    return (
        <header>
            <Logo />
            <p className="logo-text">Shortify</p>
        </header>
    );
}

export default Header;
