import {

Stack,

IconButton,

Tooltip,

} from "@mui/material";

import EditIcon

from "@mui/icons-material/Edit";

import DeleteIcon

from "@mui/icons-material/Delete";

import VisibilityIcon

from "@mui/icons-material/Visibility";

export default function ActionButtons({

onView,

onEdit,

onDelete,

}){

return(

<Stack

direction="row"

spacing={1}

>

<Tooltip title="View">

<IconButton onClick={onView}>

<VisibilityIcon/>

</IconButton>

</Tooltip>

<Tooltip title="Edit">

<IconButton

color="primary"

onClick={onEdit}

>

<EditIcon/>

</IconButton>

</Tooltip>

<Tooltip title="Delete">

<IconButton

color="error"

onClick={onDelete}

>

<DeleteIcon/>

</IconButton>

</Tooltip>

</Stack>

);

}