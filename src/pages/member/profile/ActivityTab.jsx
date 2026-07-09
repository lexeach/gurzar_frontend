import React, { useMemo, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
  Chip,
} from "@mui/material";

import {
  Search,
  Download,
} from "@mui/icons-material";

import { DataGrid } from "@mui/x-data-grid";

export default function ActivityTab({ member }) {

  const [search, setSearch] = useState("");

  const rows =
    member?.activityLog || [
      {
        id: 1,
        action: "Member Created",
        performedBy: "Super Admin",
        role: "Administrator",
        date: "05 Jul 2026",
        time: "10:15 AM",
        ip: "103.45.122.14",
        device: "Chrome / Windows",
        location: "Jaipur",
        status: "Success",
      },
      {
        id: 2,
        action: "KYC Approved",
        performedBy: "State Admin",
        role: "State Admin",
        date: "06 Jul 2026",
        time: "09:45 AM",
        ip: "103.44.11.24",
        device: "Edge / Windows",
        location: "Jaipur",
        status: "Success",
      },
      {
        id: 3,
        action: "Profile Updated",
        performedBy: "District Admin",
        role: "District Admin",
        date: "08 Jul 2026",
        time: "03:40 PM",
        ip: "110.52.18.101",
        device: "Chrome / Android",
        location: "Ajmer",
        status: "Success",
      },
      {
        id: 4,
        action: "Login",
        performedBy: "Member",
        role: "Member",
        date: "12 Jul 2026",
        time: "08:15 PM",
        ip: "122.161.55.91",
        device: "Safari / iPhone",
        location: "Delhi",
        status: "Success",
      },
    ];

  const filteredRows = useMemo(() => {
    if (!search) return rows;

    const keyword = search.toLowerCase();

    return rows.filter((item) =>
      Object.values(item).some((value) =>
        String(value)
          .toLowerCase()
          .includes(keyword)
      )
    );
  }, [rows, search]);

  const columns = [
    {
      field: "action",
      headerName: "Action",
      minWidth: 180,
      flex: 1,
    },
    {
      field: "performedBy",
      headerName: "Performed By",
      width: 170,
    },
    {
      field: "role",
      headerName: "Role",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      width: 120,
    },
    {
      field: "time",
      headerName: "Time",
      width: 110,
    },
    {
      field: "ip",
      headerName: "IP Address",
      width: 150,
    },
    {
      field: "device",
      headerName: "Browser / Device",
      width: 190,
    },
    {
      field: "location",
      headerName: "Location",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color="success"
          size="small"
        />
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
        title="Audit Activity Log"
        subheader="Complete history of actions performed on this member"
      />

      <CardContent>

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={2}
          mb={3}
        >
          <TextField
            fullWidth
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search activity..."
            InputProps={{
              startAdornment: <Search />,
            }}
          />

          <Button
            variant="outlined"
            startIcon={<Download />}
          >
            Export
          </Button>

        </Stack>

        <div
          style={{
            width: "100%",
            height: 500,
          }}
        >
          <DataGrid
            rows={filteredRows}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 20, 50]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
          />
        </div>

      </CardContent>

    </Card>
  );

}