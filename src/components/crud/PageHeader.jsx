import {
    Box,
    Typography,
    Stack
} from "@mui/material";

export default function PageHeader({

    title,

    subtitle,

    actions,

}) {

    return (

        <Stack

            direction="row"

            justifyContent="space-between"

            alignItems="center"

            mb={3}

        >

            <Box>

                <Typography

                    variant="h4"

                    fontWeight={700}

                >

                    {title}

                </Typography>

                {

                    subtitle && (

                        <Typography

                            color="text.secondary"

                        >

                            {subtitle}

                        </Typography>

                    )

                }

            </Box>

            <Stack

                direction="row"

                spacing={2}

            >

                {actions}

            </Stack>

        </Stack>

    );

}