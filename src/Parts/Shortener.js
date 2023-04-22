import React, { useState, useContext, useRef } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    IconButton,
    useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import NotificationContext from "../Context/NotificationContext";
import api from "../utils/Api";
import { DataManagement, urls } from "../utils/DataManagement";

function Shortener() {
    const { toggleNotification, changeMessageVal, changeseverityVal } =
        useContext(NotificationContext);
    const theme = useTheme();
    const [val, setVal] = useState("");
    const [urlsData, setUrlsData] = useState(() =>
        DataManagement.getUrlFromStorage()
    );

    const textRef = useRef(null);

    const mobileScreen = useMediaQuery("(max-width:600px)");

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await api.shortifyUrl(val);
            if (DataManagement.isStorageExist()) {
                const composedData = DataManagement.composeData(
                    val,
                    result.short_link
                );
                DataManagement.saveUrlToStorage(composedData);
            }
            setVal("");
            setUrlsData(DataManagement.getUrlFromStorage());
            changeseverityVal("success");
            changeMessageVal("link has been shortened successfully");
            toggleNotification(true);
        } catch (error) {
            changeseverityVal("error");
            changeMessageVal(error.response.data.error);
            toggleNotification(true);
        }
    };

    const onHandleCopy = () => {
        const text = textRef.current.innerText;
        navigator.clipboard.writeText(text);
        changeMessageVal("Link copied");
        changeseverityVal("success");
        toggleNotification(true);
    };

    const onHandleDelete = (i) => {
        urls.splice(i, 1);
        DataManagement.removeLink();
        setUrlsData(DataManagement.getUrlFromStorage());
        changeseverityVal("success");
        changeMessageVal("Link successfully removed");
        toggleNotification(true);
    };

    return (
        <Box
            id="shortener"
            component="section"
            sx={{
                width: "100%",
                padding: "50px 8%",
                fontFamily: "Averia Libre, cursive",
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontFamily: "Averia Libre, cursive",
                    textAlign: "center",
                    [theme.breakpoints.up("xs")]: {
                        fontSize: "1.875rem",
                    },
                }}
            >
                Shortify your links now
            </Typography>
            <Box
                sx={{
                    padding: "60px",
                    borderRadius: "20px",
                    backgroundColor: "#EFF5F5",
                    mt: "10px",

                    [theme.breakpoints.up("xs")]: {
                        padding: "20px 10px",
                    },
                }}
            >
                <form
                    onSubmit={onHandleSubmit}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <TextField
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        label="Paste your link here"
                        fullWidth
                        autoComplete="off"
                    />
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "10px",
                            textTransform: "capitalize",
                            fontFamily: "Averia Libre, cursive",
                            fontSize: "1.1875rem",
                            [theme.breakpoints.up("xs")]: {
                                fontSize: "0.875rem",
                            },
                        }}
                        type="submit"
                        size={mobileScreen ? "medium" : "large"}
                    >
                        Shortify
                    </Button>
                </form>
            </Box>

            {urlsData.map((url, i) => (
                <Grid
                    key={url.id}
                    container
                    sx={{
                        padding: "20px 20px",
                        borderRadius: "10px",
                        mt: "10px",
                        backgroundColor: "#EFF5F5",
                    }}
                >
                    <Grid
                        item
                        md={8.5}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            [theme.breakpoints.up("xs")]: {
                                padding: "10px 0",
                            },
                        }}
                    >
                        <a
                            href={url.originalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: theme.palette.grey[800] }}
                        >
                            {url.originalUrl.length > 30
                                ? `${url.originalUrl.substring(0, 30)}...`
                                : url.originalUrl}
                        </a>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        xs={8}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            ref={textRef}
                            sx={{
                                color: theme.palette.primary.light,
                                fontWeight: 600,
                            }}
                        >
                            {url.shortUrl}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={1.5}
                        xs={4}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={() => onHandleCopy()}
                            sx={{
                                fontFamily: "Averia Libre, cursive",
                                fontSize: "0.875rem",
                                textTransform: "capitalize",
                            }}
                        >
                            Copy
                        </Button>
                        <IconButton
                            aria-label="delete"
                            onClick={() => onHandleDelete(i)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
}

export default Shortener;
