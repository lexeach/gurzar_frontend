import React from "react";
import {
    Box,
    CircularProgress,
    Typography,
} from "@mui/material";

export default function Loader({

    size = 40,

    text = "Loading...",

    fullHeight = true,

}) {

    return (

        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight={fullHeight ? "60vh" : "120px"}
            gap={2}
        >

            <CircularProgress
                size={size}
            />

            <Typography
                color="text.secondary"
            >
                {text}
            </Typography>

        </Box>

    );

}