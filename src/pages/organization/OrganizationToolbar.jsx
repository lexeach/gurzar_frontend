import React from "react";

import {
  Paper,
  Stack,
  Button,
  TextField,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  Search,
  Add,
  ZoomIn,
  ZoomOut,
  CenterFocusStrong,
  UnfoldMore,
  UnfoldLess,
  Fullscreen,
  Download,
  Refresh,
} from "@mui/icons-material";

import { useDispatch } from "react-redux";

import {
  expandAll,
  collapseAll,
  refreshTree,
} from "../../redux/slices/organizationSlice";

export default function OrganizationToolbar({

  onSearch,

  onZoomIn,

  onZoomOut,

  onFitView,

  onFullscreen,

  onExport,

}) {

  const dispatch = useDispatch();

  return (

<Paper
sx={{
mb:3,
p:2,
}}
>

<Stack

direction={{
xs:"column",
md:"row"
}}

spacing={2}

alignItems="center"

justifyContent="space-between"

>

<Stack
direction="row"
spacing={2}
>

<TextField

size="small"

placeholder="Search Executive..."

InputProps={{
startAdornment:<Search/>
}}

onChange={(e)=>

onSearch?.(

e.target.value

)

}

/>

<Button

variant="contained"

startIcon={<Add/>}

>

Add Executive

</Button>

</Stack>

<Stack
direction="row"
spacing={1}
>

<Tooltip title="Expand All">

<IconButton

onClick={()=>

dispatch(expandAll())

}

>

<UnfoldMore/>

</IconButton>

</Tooltip>

<Tooltip title="Collapse All">

<IconButton

onClick={()=>

dispatch(collapseAll())

}

>

<UnfoldLess/>

</IconButton>

</Tooltip>

<Tooltip title="Zoom In">

<IconButton

onClick={onZoomIn}

>

<ZoomIn/>

</IconButton>

</Tooltip>

<Tooltip title="Zoom Out">

<IconButton

onClick={onZoomOut}

>

<ZoomOut/>

</IconButton>

</Tooltip>

<Tooltip title="Fit Screen">

<IconButton

onClick={onFitView}

>

<CenterFocusStrong/>

</IconButton>

</Tooltip>

<Tooltip title="Fullscreen">

<IconButton

onClick={onFullscreen}

>

<Fullscreen/>

</IconButton>

</Tooltip>

<Tooltip title="Export">

<IconButton

onClick={onExport}

>

<Download/>

</IconButton>

</Tooltip>

<Tooltip title="Refresh">

<IconButton

onClick={()=>

dispatch(refreshTree())

}

>

<Refresh/>

</IconButton>

</Tooltip>

</Stack>

</Stack>

</Paper>

);

}