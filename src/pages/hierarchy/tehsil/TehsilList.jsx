import React, { useEffect, useMemo, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  TextField,
  MenuItem,
  Chip,
  IconButton,
} from "@mui/material";

import {
  Add,
  Visibility,
  Edit,
  Delete,
  Download,
  Search,
} from "@mui/icons-material";

import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchTehsils } from "../../../redux/slices/tehsilSlice";

import { states } from "../../../constants/states";
import { districts } from "../../../constants/districts";

export default function TehsilList() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tehsils = [], loading } = useSelector(
    (state) => state.tehsil
  );

  const [search, setSearch] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [district, setDistrict] = useState("");

  useEffect(() => {
    dispatch(fetchTehsils());
  }, [dispatch]);

  const districtOptions = useMemo(() => {
    if (!stateCode) return [];
    return districts[stateCode] || [];
  }, [stateCode]);

  const filteredRows = useMemo(() => {
    return tehsils.filter((row) => {

      const keyword =
        search === "" ||
        row.name.toLowerCase().includes(search.toLowerCase());

      const stateFilter =
        !stateCode || row.stateCode === stateCode;

      const districtFilter =
        !district || row.district === district;

      return keyword && stateFilter && districtFilter;

    });
  }, [tehsils, search, stateCode, district]);

  const columns = [

    {
      field: "code",
      headerName: "Code",
      width: 120,
    },

    {
      field: "name",
      headerName: "Tehsil",
      flex: 1,
      minWidth: 220,
    },

    {
      field: "district",
      headerName: "District",
      width: 180,
    },

    {
      field: "state",
      headerName: "State",
      width: 170,
    },

    {
      field: "villages",
      headerName: "Villages",
      width: 110,
    },

    {
      field: "booths",
      headerName: "Booths",
      width: 100,
    },

    {
      field: "members",
      headerName: "Members",
      width: 120,
    },

    {
      field: "status",
      headerName: "Status",
      width: 130,

      renderCell: (params) => (

        <Chip

          size="small"

          label={params.value}

          color={
            params.value === "Active"
              ? "success"
              : "default"
          }

        />

      ),

    },

    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,

      renderCell: (params) => (

        <Stack
          direction="row"
          spacing={1}
        >

          <IconButton
            color="primary"
            onClick={() =>
              navigate(`/hierarchy/tehsils/${params.row.id}`)
            }
          >
            <Visibility />
          </IconButton>

          <IconButton
            color="secondary"
            onClick={() =>
              navigate(`/hierarchy/tehsils/edit/${params.row.id}`)
            }
          >
            <Edit />
          </IconButton>

          <IconButton color="error">
            <Delete />
          </IconButton>

        </Stack>

      ),

    },

  ];

  return (

    <Box>

      <Stack

        direction={{
          xs: "column",
          md: "row",
        }}

        justifyContent="space-between"

        mb={3}

      >

        <Box>

          <Typography
            variant="h4"
            fontWeight={700}
          >
            Tehsil Management
          </Typography>

          <Typography color="text.secondary">
            Manage organization tehsils
          </Typography>

        </Box>

        <Button

          variant="contained"

          startIcon={<Add />}

          onClick={() =>
            navigate("/hierarchy/tehsils/new")
          }

        >
          Add Tehsil
        </Button>

      </Stack>

      <Card>

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

              placeholder="Search Tehsil..."

              value={search}

              onChange={(e) =>
                setSearch(e.target.value)
              }

              InputProps={{
                startAdornment: <Search />,
              }}

            />

            <TextField

              select

              label="State"

              value={stateCode}

              onChange={(e) => {

                setStateCode(e.target.value);

                setDistrict("");

              }}

              sx={{ minWidth: 180 }}

            >

              <MenuItem value="">
                All States
              </MenuItem>

              {states.map((state) => (

                <MenuItem
                  key={state.code}
                  value={state.code}
                >
                  {state.name}
                </MenuItem>

              ))}

            </TextField>

            <TextField

              select

              label="District"

              value={district}

              onChange={(e) =>
                setDistrict(e.target.value)
              }

              sx={{ minWidth: 200 }}

            >

              <MenuItem value="">
                All Districts
              </MenuItem>

              {districtOptions.map((item) => (

                <MenuItem
                  key={item.id}
                  value={item.name}
                >
                  {item.name}
                </MenuItem>

              ))}

            </TextField>

            <Button
              variant="outlined"
              startIcon={<Download />}
            >
              Export
            </Button>

          </Stack>

          <div
            style={{
              height: 600,
              width: "100%",
            }}
          >

            <DataGrid

              rows={filteredRows}

              columns={columns}

              loading={loading}

              checkboxSelection

              disableRowSelectionOnClick

              pageSizeOptions={[10, 25, 50, 100]}

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

    </Box>

  );

}