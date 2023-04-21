import React, { useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import NotificationContext from "../Context/NotificationContext";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Notification() {
    const { notificationState, toggleNotification, messageVal, severityVal } =
        useContext(NotificationContext);
    return (
        <Snackbar
            open={notificationState}
            autoHideDuration={5000}
            onClose={() => toggleNotification(false)}
        >
            <Alert
                onClose={() => toggleNotification(false)}
                severity={severityVal}
                sx={{
                    width: "100%",
                    color: "#fff",
                }}
            >
                {messageVal}
            </Alert>
        </Snackbar>
    );
}

export default Notification;
