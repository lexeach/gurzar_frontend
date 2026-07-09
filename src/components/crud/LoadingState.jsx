import React from "react";

import {
  Box,
  Skeleton,
  Stack,
} from "@mui/material";

export default function LoadingState({

  rows = 10,

  columns = 6,

}) {

  return (

    <Box p={2}>

      {Array.from({ length: rows }).map((_, row) => (

        <Stack
          key={row}
          direction="row"
          spacing={2}
          mb={2}
        >

          {Array.from({
            length: columns,
          }).map((__, col) => (

            <Skeleton

              key={col}

              variant="rounded"

              width="100%"

              height={40}

            />

          ))}

        </Stack>

      ))}

    </Box>

  );

}