import {

TextField,

InputAdornment,

IconButton,

Tooltip,

Stack,

} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import RefreshIcon from "@mui/icons-material/Refresh";

export default function SearchToolbar({

search,

onSearch,

onRefresh,

placeholder="Search..."

}){

return(

<Stack

direction="row"

spacing={2}

mb={2}

>

<TextField

fullWidth

size="small"

value={search}

placeholder={placeholder}

onChange={(e)=>onSearch(e.target.value)}

InputProps={{

startAdornment:(

<InputAdornment position="start">

<SearchIcon/>

</InputAdornment>

)

}}

/>

<Tooltip title="Refresh">

<IconButton

color="primary"

onClick={onRefresh}

>

<RefreshIcon/>

</IconButton>

</Tooltip>

</Stack>

);

}