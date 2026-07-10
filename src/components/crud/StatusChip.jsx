import React from "react";

import {
    Chip,
} from "@mui/material";

export default function StatusChip({

    status,

}) {

    const getColor = () => {

        switch (
            String(status)
                .toLowerCase()
        ) {

            case "active":

                return "success";

            case "inactive":

                return "default";

            case "pending":

                return "warning";

            case "rejected":

                return "error";

            case "approved":

                return "success";

            default:

                return "primary";
        }
    };

    return (

        <Chip

            label={status}

            color={getColor()}

            size="small"

            variant="filled"

        />

    );
}