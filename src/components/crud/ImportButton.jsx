import{

Button

}from"@mui/material";

import UploadIcon

from "@mui/icons-material/Upload";

export default function ImportButton({

onClick,

label="Import"

}){

return(

<Button

variant="contained"

startIcon={<UploadIcon/>}

onClick={onClick}

>

{label}

</Button>

);

}