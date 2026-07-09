import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Chip,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import {
  Visibility,
  Edit,
  QrCode2,
} from "@mui/icons-material";

import {
  DataGrid,
} from "@mui/x-data-grid";

import { useNavigate } from "react-router-dom";

const rows = [
  {
    id: 1,
    memberId: "DOMS000001",
    name: "Rahul Gurjar",
    mobile: "9876543210",
    state: "Rajasthan",
    district: "Jaipur",
    date: "06 Jul 2026",
    status: "Verified",
  },
  {
    id: 2,
    memberId: "DOMS000002",
    name: "Deepak Singh",
    mobile: "9876543211",
    state: "Haryana",
    district: "Sonipat",
    date: "05 Jul 2026",
    status: "Pending",
  },
  {
    id: 3,
    memberId: "DOMS000003",
    name: "Rakesh Kumar",
    mobile: "9876543212",
    state: "Delhi",
    district: "New Delhi",
    date: "05 Jul 2026",
    status: "Active",
  },
  {
    id: 4,
    memberId: "DOMS000004",
    name: "Anil Chaudhary",
    mobile: "9876543213",
    state: "Uttar Pradesh",
    district: "Meerut",
    date: "04 Jul 2026",
    status: "Verified",
  },
  {
    id: 5,
    memberId: "DOMS000005",
    name: "Vikas Sharma",
    mobile: "9876543214",
    state: "Madhya Pradesh",
    district: "Gwalior",
    date: "03 Jul 2026",
    status: "Active",
  },
];

export default function RecentMembers() {

  const navigate = useNavigate();

  const getStatusColor = (status) => {

    switch (status) {

      case "Verified":
        return "success";

      case "Pending":
        return "warning";

      case "Active":
        return "primary";

      default:
        return "default";

    }

  };

  const columns = [

    {
      field: "photo",
      headerName: "",
      width: 70,

      sortable: false,

      renderCell: (params) => (

        <Avatar>
          {params.row.name.charAt(0)}
        </Avatar>

      ),
    },

    {
      field: "memberId",
      headerName: "Member ID",
      width: 140,
    },

    {
      field: "name",
      headerName: "Name",
      width: 180,
    },

    {
      field: "mobile",
      headerName: "Mobile",
      width: 140,
    },

    {
      field: "state",
      headerName: "State",
      width: 150,
    },

    {
      field: "district",
      headerName: "District",
      width: 150,
    },

    {
      field: "date",
      headerName: "Registration",
      width: 140,
    },

    {
      field: "status",

      headerName: "Status",

      width: 130,

      renderCell: (params) => (

        <Chip
          label={params.value}
          size="small"
          color={getStatusColor(params.value)}
        />

      ),

    },

    {

      field: "action",

      headerName: "Actions",

      width: 160,

      sortable: false,

      renderCell: (params) => (

        <Stack
          direction="row"
          spacing={1}
        >

          <IconButton
            color="primary"
            onClick={() =>
              navigate(
                `/member/profile/${params.row.id}`
              )
            }
          >
            <Visibility />
          </IconButton>

          <IconButton
            color="success"
          >
            <Edit />
          </IconButton>

          <IconButton
            color="secondary"
          >
            <QrCode2 />
          </IconButton>

        </Stack>

      ),

    },

  ];

  return (

    <Card
      sx={{
        borderRadius: 4,
      }}
    >

      <CardHeader

        title="Recent Member Registrations"

        action={

          <Button
            variant="contained"
            onClick={() =>
              navigate("/members")
            }
          >
            View All
          </Button>

        }

      />

      <CardContent>

        <div
          style={{
            height: 430,
            width: "100%",
          }}
        >

          <DataGrid

            rows={rows}

            columns={columns}

            disableRowSelectionOnClick

            pageSizeOptions={[5,10,20]}

            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}

          />

        </div>

      </CardContent>

    </Card>

  );

}