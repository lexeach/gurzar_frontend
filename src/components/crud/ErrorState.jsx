import React from "react";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import {
  ErrorOutline,
  Refresh,
} from "@mui/icons-material";

export default function ErrorState({

  message =

    "Something went wrong.",

  onRetry,

}) {

  return (

    <Box

      display="flex"

      flexDirection="column"

      alignItems="center"

      justifyContent="center"

      py={8}

    >

      <ErrorOutline

        color="error"

        sx={{

          fontSize: 80,

        }}

      />

      <Typography

        variant="h5"

        mt={2}

      >

        Error

      </Typography>

      <Typography

        color="text.secondary"

        mt={1}

      >

        {message}

      </Typography>

      <Button

        sx={{ mt: 3 }}

        variant="contained"

        color="error"

        startIcon={<Refresh />}

        onClick={onRetry}

      >

        Retry

      </Button>

    </Box>

  );

}