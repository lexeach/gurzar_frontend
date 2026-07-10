import React from "react";
import { Outlet } from "react-router-dom";

import {
    Box,
    Container,
    Paper,
    Typography,
    CssBaseline,
} from "@mui/material";

import LoadingOverlay from "../components/common/LoadingOverlay";

export default function AuthLayout() {

    const [loading] = React.useState(false);

    return (

        <>

            <CssBaseline />

            <Box

                sx={{

                    minHeight: "100vh",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    background:
                        "linear-gradient(135deg,#1976d2,#42a5f5)",

                    p: 2,

                }}

            >

                <Container

                    maxWidth="sm"

                >

                    <Paper

                        elevation={8}

                        sx={{

                            p: 5,

                            borderRadius: 3,

                        }}

                    >

                        <Box

                            textAlign="center"

                            mb={4}

                        >

                            <Typography

                                variant="h4"

                                fontWeight={700}

                            >

                                Digital Organization

                            </Typography>

                            <Typography

                                color="text.secondary"

                                mt={1}

                            >

                                Management System

                            </Typography>

                        </Box>

                        <Outlet />

                    </Paper>

                </Container>

            </Box>

            <LoadingOverlay

                open={loading}

            />

        </>

    );

}