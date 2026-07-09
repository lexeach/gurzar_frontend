import React from "react";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import {
  Inbox,
  Add,
} from "@mui/icons-material";

export default function EmptyState({

  title = "No Records Found",

  description =

    "There is no data available.",

  showButton = false,

  buttonText = "Add New",

  onAdd,

}) {

  return (

    <Box

      display="flex"

      flexDirection="column"

      alignItems="center"

      justifyContent="center"

      py={8}

    >

      <Inbox

        sx={{

          fontSize: 80,

          color: "grey.400",

        }}

      />

      <Typography

        variant="h5"

        mt={2}

      >

        {title}

      </Typography>

      <Typography

        color="text.secondary"

        mt={1}

      >

        {description}

      </Typography>

      {showButton && (

        <Button

          sx={{ mt: 3 }}

          variant="contained"

          startIcon={<Add />}

          onClick={onAdd}

        >

          {buttonText}

        </Button>

      )}

    </Box>

  );

}