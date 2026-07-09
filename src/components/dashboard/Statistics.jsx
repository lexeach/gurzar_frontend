import React from "react";

import {
Card,
CardContent,
Typography,
LinearProgress,
Stack,
} from "@mui/material";

export default function Statistics() {

return(

<Card>

<CardContent>

<Typography
variant="h6"
mb={2}
>

Overall Progress

</Typography>

<Stack spacing={3}>

<div>

<Typography>
Membership Completion
</Typography>

<LinearProgress
variant="determinate"
value={78}
/>

</div>

<div>

<Typography>
Committee Formation
</Typography>

<LinearProgress
variant="determinate"
value={64}
/>

</div>

<div>

<Typography>
Data Verification
</Typography>

<LinearProgress
variant="determinate"
value={91}
/>

</div>

</Stack>

</CardContent>

</Card>

);

}