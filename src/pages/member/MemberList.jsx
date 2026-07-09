import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Stack,
  TextField,
  MenuItem,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  InputAdornment,
} from "@mui/material";

import {
  Add,
  Search,
  Refresh,
  Download,
  FilterList,
  Visibility,
  Edit,
  Delete,
  QrCode2,
  VerifiedUser,
} from "@mui/icons-material";

import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  fetchMembers,
  deleteMember,
} from "../../redux/slices/memberSlice";

export default function MemberList() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    members,
    loading,
  } = useSelector(
    state => state.member
  );

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  useEffect(() => {

    dispatch(fetchMembers());

  }, [dispatch]);

  const getStatusColor = (status) => {

    switch (status) {

      case "Verified":
        return "success";

      case "Pending":
        return "warning";

      case "Rejected":
        return "error";

      default:
        return "primary";

    }

  };

  const columns = [

    {
      field: "photo",

      headerName: "",

      width: 70,

      sortable: false,

      renderCell: params => (

        <Avatar
          src={params.row.photo}
        >
          {params.row.name?.charAt(0)}
        </Avatar>

      )

    },

    {
      field: "memberId",
      headerName: "Member ID",
      width: 140,
    },

    {
      field: "name",
      headerName: "Member Name",
      flex: 1,
      minWidth: 220,
    },

    {
      field: "mobile",
      headerName: "Mobile",
      width: 140,
    },

    {
      field: "state",
      headerName: "State",
      width: 140,
    },

    {
      field: "district",
      headerName: "District",
      width: 140,
    },

    {
      field: "registrationDate",
      headerName: "Registration",
      width: 140,
    },

    {

      field: "status",

      headerName: "Status",

      width: 120,

      renderCell: params => (

        <Chip
          label={params.value}
          color={getStatusColor(params.value)}
          size="small"
        />

      )

    },

    {

      field: "actions",

      headerName: "Actions",

      width: 210,

      sortable: false,

      renderCell: params => (

        <Stack
          direction="row"
          spacing={1}
        >

          <Tooltip title="View">

            <IconButton
              color="primary"
              onClick={() =>
                navigate(`/member/profile/${params.row.id}`)
              }
            >
              <Visibility />
            </IconButton>

          </Tooltip>

          <Tooltip title="Edit">

            <IconButton
              color="success"
            >
              <Edit />
            </IconButton>

          </Tooltip>

          <Tooltip title="QR Card">

            <IconButton
              color="secondary"
            >
              <QrCode2 />
            </IconButton>

          </Tooltip>

          <Tooltip title="Verify">

            <IconButton
              color="info"
            >
              <VerifiedUser />
            </IconButton>

          </Tooltip>

          <Tooltip title="Delete">

            <IconButton
              color="error"
              onClick={() =>
                dispatch(deleteMember(params.row.id))
              }
            >
              <Delete />
            </IconButton>

          </Tooltip>

        </Stack>

      )

    }

  ];

  return (

    <Card
      sx={{
        borderRadius:4
      }}
    >

      <CardHeader

        title="Member Management"

        subheader="Manage all registered members"

        action={

          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() =>
              navigate("/member/new")
            }
          >
            New Member
          </Button>

        }

      />

      <CardContent>

        <Stack
          direction={{
            xs:"column",
            md:"row"
          }}
          spacing={2}
          mb={3}
        >

          <TextField

            placeholder="Search Member..."

            value={search}

            onChange={e=>setSearch(e.target.value)}

            InputProps={{

              startAdornment:(

                <InputAdornment position="start">

                  <Search/>

                </InputAdornment>

              )

            }}

            sx={{
              flex:1
            }}

          />

          <TextField

            select

            value={status}

            onChange={e=>setStatus(e.target.value)}

            sx={{
              width:180
            }}

          >

            <MenuItem value="">All Status</MenuItem>

            <MenuItem value="Verified">
              Verified
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

            <MenuItem value="Rejected">
              Rejected
            </MenuItem>

          </TextField>

          <Button
            startIcon={<FilterList/>}
            variant="outlined"
          >
            Filters
          </Button>

          <Button
            startIcon={<Refresh/>}
            variant="outlined"
            onClick={()=>dispatch(fetchMembers())}
          >
            Refresh
          </Button>

          <Button
            startIcon={<Download/>}
            variant="outlined"
          >
            Export
          </Button>

        </Stack>

        <Box
          sx={{
            height:650
          }}
        >

          <DataGrid

            rows={members}

            columns={columns}

            loading={loading}

            disableRowSelectionOnClick

            checkboxSelection

            pageSizeOptions={[10,20,50,100]}

            initialState={{

              pagination:{

                paginationModel:{

                  pageSize:20

                }

              }

            }}

          />

        </Box>

      </CardContent>

    </Card>

  );

}