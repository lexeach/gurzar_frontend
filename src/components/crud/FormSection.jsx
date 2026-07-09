import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
  Box,
  Divider,
  Stack,
} from "@mui/material";

import {
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

export default function FormSection({

  title,

  subtitle = "",

  icon = null,

  children,

  collapsible = false,

  defaultExpanded = true,

  elevation = 1,

  actions = null,

}) {

  const [expanded, setExpanded] =
    useState(defaultExpanded);

  const handleToggle = () => {

    if (!collapsible) return;

    setExpanded((prev) => !prev);

  };

  return (

    <Card
      elevation={elevation}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >

      <CardHeader

        avatar={icon}

        title={

          <Typography
            variant="h6"
            fontWeight={600}
          >
            {title}
          </Typography>

        }

        subheader={subtitle}

        action={

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >

            {actions}

            {collapsible && (

              <IconButton
                onClick={handleToggle}
              >

                {expanded
                  ? <ExpandLess />
                  : <ExpandMore />
                }

              </IconButton>

            )}

          </Stack>

        }

      />

      <Divider />

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >

        <CardContent>

          <Box>

            {children}

          </Box>

        </CardContent>

      </Collapse>

    </Card>

  );

}