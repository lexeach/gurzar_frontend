import React from "react";

import {
    Backdrop,
    CircularProgress,
    Typography,
    Stack,
} from "@mui/material";

export default function LoadingOverlay({

    open = false,

    message = "Please wait...",

}) {

    return (

        <Backdrop

            open={open}

            sx={{

                zIndex: theme =>

                    theme.zIndex.drawer + 999,

                color: "#fff",

            }}

        >

            <Stack

                spacing={2}

                alignItems="center"

            >

                <CircularProgress

                    color="inherit"

                />

                <Typography>

                    {message}

                </Typography>

            </Stack>

        </Backdrop>

    );

}