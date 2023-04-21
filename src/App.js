import React, { useState, useMemo } from "react";
import NotificationContext from "./Context/NotificationContext";
import Header from "./Parts/Header";
import Hero from "./Parts/Hero";
import Shortener from "./Parts/Shortener";
import Footer from "./Parts/Footer";
import Notification from "./Components/Notification";

import "./Styles/index.scss";

function App() {
    const [notificationState, setNotificationState] = useState(false);
    const [messageVal, setMessageVal] = useState("");
    const [severityVal, setSeverityVal] = useState("success");

    const toggleNotification = (state) => {
        setNotificationState(state);
    };

    const changeMessageVal = (state) => {
        setMessageVal(state);
    };

    const changeseverityVal = (state) => {
        setSeverityVal(state);
    };

    const notificationContextValue = useMemo(() => {
        return {
            notificationState,
            toggleNotification,
            messageVal,
            changeMessageVal,
            severityVal,
            changeseverityVal,
        };
    }, [notificationState, messageVal, severityVal]);

    return (
        <NotificationContext.Provider value={notificationContextValue}>
            <div className="App">
                <Header />
                <Notification />
                <main>
                    <Hero />
                    <Shortener />
                </main>
                <Footer />
            </div>
        </NotificationContext.Provider>
    );
}

export default App;
