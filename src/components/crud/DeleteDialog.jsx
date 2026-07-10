import{

Dialog,

DialogTitle,

DialogContent,

DialogActions,

Typography,

Button,

}from"@mui/material";

export default function DeleteDialog({

open,

onClose,

onConfirm,

title="Delete",

message="Are you sure you want to delete this record?"

}){

return(

<Dialog

open={open}

onClose={onClose}

>

<DialogTitle>

{title}

</DialogTitle>

<DialogContent>

<Typography>

{message}

</Typography>

</DialogContent>

<DialogActions>

<Button onClick={onClose}>

Cancel

</Button>

<Button

color="error"

variant="contained"

onClick={onConfirm}

>

Delete

</Button>

</DialogActions>

</Dialog>

);

}