import{

Button

}from"@mui/material";

import DownloadIcon

from "@mui/icons-material/Download";

export default function ExportButton({

onClick,

label="Export"

}){

return(

<Button

variant="outlined"

startIcon={<DownloadIcon/>}

onClick={onClick}

>

{label}

</Button>

);

}