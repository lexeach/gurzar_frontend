import React from "react";

import {

    Alert,

    AlertTitle,

    Button,

    Stack,

} from "@mui/material";

export default function ErrorAlert({

    error,

    title = "Error",

    onRetry,

}) {

    if (!error) {

        return null;

    }

    return (

        <Alert

            severity="error"

            variant="filled"

        >

            <AlertTitle>

                {title}

            </AlertTitle>

            {typeof error === "string"

                ? error

                : error.message ||

                  "Something went wrong."}

            {

                onRetry && (

                    <Stack

                        mt={2}

                    >

                        <Button

                            variant="contained"

                            color="inherit"

                            size="small"

                            onClick={onRetry}

                        >

                            Retry

                        </Button>

                    </Stack>

                )

            }

        </Alert>

    );

}