import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function ErrorLayout({

    code = 404,

    title,

    message,

    showHome = true,

    showRefresh = true,

    children,

}) {

    const navigate = useNavigate();

    const errorConfig = {

        401: {

            title: "Unauthorized",

            message: "You are not authorized to access this page.",

        },

        403: {

            title: "Access Denied",

            message: "You don't have permission to perform this action.",

        },

        404: {

            title: "Page Not Found",

            message: "The page you are looking for does not exist.",

        },

        500: {

            title: "Internal Server Error",

            message: "Something went wrong on the server.",

        },

        503: {

            title: "Service Unavailable",

            message: "The application is temporarily unavailable.",

        },

    };

    const config =

        errorConfig[code] ||

        {

            title: "Unexpected Error",

            message: "Something went wrong.",

        };

    return (

        <Container

            maxWidth="md"

            sx={{

                minHeight: "100vh",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

            }}

        >

            <Paper

                elevation={6}

                sx={{

                    width: "100%",

                    p: 6,

                    borderRadius: 3,

                    textAlign: "center",

                }}

            >

                <Stack

                    spacing={3}

                    alignItems="center"

                >

                    <ErrorOutlineIcon

                        color="error"

                        sx={{

                            fontSize: 90,

                        }}

                    />

                    <Typography

                        variant="h1"

                        color="error"

                        fontWeight={700}

                    >

                        {code}

                    </Typography>

                    <Typography

                        variant="h4"

                        fontWeight={600}

                    >

                        {title || config.title}

                    </Typography>

                    <Typography

                        color="text.secondary"

                    >

                        {

                            message ||

                            config.message

                        }

                    </Typography>

                    {children}

                    <Stack

                        direction="row"

                        spacing={2}

                        justifyContent="center"

                    >

                        {

                            showHome && (

                                <Button

                                    variant="contained"

                                    startIcon={

                                        <HomeIcon />

                                    }

                                    onClick={() =>

                                        navigate("/")

                                    }

                                >

                                    Home

                                </Button>

                            )

                        }

                        {

                            showRefresh && (

                                <Button

                                    variant="outlined"

                                    startIcon={

                                        <RefreshIcon />

                                    }

                                    onClick={() =>

                                        window.location.reload()

                                    }

                                >

                                    Refresh

                                </Button>

                            )

                        }

                    </Stack>

                </Stack>

            </Paper>

        </Container>

    );

}