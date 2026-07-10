import React from "react";
import { Outlet } from "react-router-dom";
import {
    Box,
    CssBaseline,
} from "@mui/material";

export default function BlankLayout() {

    return (

        <>
            <CssBaseline />

            <Box
                sx={{
                    minHeight: "100vh",
                    width: "100%",
                    bgcolor: "background.default",
                }}
            >

                <Outlet />

            </Box>

        </>

    );

}