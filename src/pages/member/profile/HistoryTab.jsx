import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Button,
  Stack,
} from "@mui/material";

import {
  Download,
  Visibility,
} from "@mui/icons-material";

import { DataGrid } from "@mui/x-data-grid";

export default function HistoryTab({ member }) {

  if (!member) return null;

  const rows =
    member.membershipHistory || [
      {
        id: 1,
        membershipType: "Primary Member",
        validFrom: "05 Jul 2026",
        validTo: "04 Jul 2027",
        amount: 500,
        paymentMode: "UPI",
        receiptNo: "REC000145",
        status: "Active",
      },
      {
        id: 2,
        membershipType: "Executive Member",
        validFrom: "05 Jul 2027",
        validTo: "04 Jul 2028",
        amount: 1000,
        paymentMode: "Cash",
        receiptNo: "REC000284",
        status: "Renewed",
      },
    ];

  const columns = [

    {
      field: "membershipType",
      headerName: "Membership",
      flex: 1,
      minWidth: 180,
    },

    {
      field: "validFrom",
      headerName: "Valid From",
      width: 140,
    },

    {
      field: "validTo",
      headerName: "Valid To",
      width: 140,
    },

    {
      field: "amount",
      headerName: "Amount",
      width: 120,
      renderCell: params => (
        <>₹ {params.value}</>
      ),
    },

    {
      field: "paymentMode",
      headerName: "Payment",
      width: 120,
    },

    {
      field: "receiptNo",
      headerName: "Receipt",
      width: 140,
    },

    {

      field: "status",

      headerName: "Status",

      width: 130,

      renderCell: params => (

        <Chip

          label={params.value}

          color={
            params.value === "Active"
              ? "success"
              : "primary"
          }

          size="small"

        />

      ),

    },

    {

      field: "action",

      headerName: "Action",

      width: 180,

      sortable: false,

      renderCell: () => (

        <Stack
          direction="row"
          spacing={1}
        >

          <Button
            size="small"
            startIcon={<Visibility />}
          >
            View
          </Button>

          <Button
            size="small"
            startIcon={<Download />}
          >
            Receipt
          </Button>

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

        title="Membership History"

        subheader="Membership lifecycle, renewals and payment records"

      />

      <CardContent>

        <div
          style={{
            width: "100%",
            height: 450,
          }}
        >

          <DataGrid

            rows={rows}

            columns={columns}

            disableRowSelectionOnClick

            pageSizeOptions={[5,10,20]}

            initialState={{
              pagination:{
                paginationModel:{
                  pageSize:5,
                },
              },
            }}

          />

        </div>

      </CardContent>

    </Card>

  );

}