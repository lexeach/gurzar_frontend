import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  IconButton,
  Tooltip,
  Divider,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";

import {
  Add,
  Refresh,
  UploadFile,
  Download,
  FilterAlt,
  ViewColumn,
  DensityMedium,
  Print,
  MoreVert,
} from "@mui/icons-material";

import { DataGrid } from "@mui/x-data-grid";

import SearchToolbar from "./SearchToolbar";
import FilterPanel from "./FilterPanel";
import ActionButtons from "./ActionButtons";
import DeleteDialog from "./DeleteDialog";
import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";
import ExportButton from "./ExportButton";
import ImportButton from "./ImportButton";
import PageHeader from "./PageHeader";

export default function MasterList({

  /* ===========================
      Page
  =========================== */

  title,

  subtitle,

  /* ===========================
      Grid
  =========================== */

  rows = [],

  columns = [],

  loading = false,

  rowId = "id",

  /* ===========================
      Filters
  =========================== */

  filters = [],

  permissions = {},

  /* ===========================
      Events
  =========================== */

  onAdd,

  onEdit,

  onDelete,

  onView,

  onRefresh,

  onExport,

  onImport,

  onRowClick,

}) {

  /* =======================================
      States
  ======================================== */

  const [search, setSearch] = useState("");

  const [selectedRows, setSelectedRows] =
    useState([]);

  const [filterValues, setFilterValues] =
    useState({});

  const [pageSize, setPageSize] =
    useState(10);

  const [density, setDensity] =
    useState("comfortable");

  const [columnVisibility, setColumnVisibility] =
    useState({});

  const [deleteRow, setDeleteRow] =
    useState(null);

  const [filterOpen, setFilterOpen] =
    useState(false);

  const [menuAnchor, setMenuAnchor] =
    useState(null);

  /* =======================================
      Menu
  ======================================== */

  const openMenu = (event) => {

    setMenuAnchor(event.currentTarget);

  };

  const closeMenu = () => {

    setMenuAnchor(null);

  };

  /* =======================================
      Refresh
  ======================================== */

  const refresh = useCallback(() => {

    if (onRefresh) {

      onRefresh();

    }

  }, [onRefresh]);

  /* =======================================
      Search
  ======================================== */

  const filteredRows = useMemo(() => {

    if (!search)
      return rows;

    const keyword =
      search.toLowerCase();

    return rows.filter((row) =>

      Object.values(row).some(value =>

        String(value)
          .toLowerCase()
          .includes(keyword)

      )

    );

  }, [rows, search]);

  /* =======================================
      Delete
  ======================================== */

  const confirmDelete = () => {

    if (deleteRow && onDelete) {

      onDelete(deleteRow);

    }

    setDeleteRow(null);

  };

  /* =======================================
      Effects
  ======================================== */

  useEffect(() => {

  }, []);

  /* =======================================
      Render
  ======================================== */

  return (

    <Box>

      {/* ======================================
            Page Header
      ======================================= */}

      <PageHeader

        title={title}

        subtitle={subtitle}

        actions={

          <Stack
            direction="row"
            spacing={1}
          >

            {permissions.add !== false && (

              <Button

                variant="contained"

                startIcon={<Add />}

                onClick={onAdd}

              >

                Add

              </Button>

            )}

            <Tooltip title="Refresh">

              <IconButton
                onClick={refresh}
              >

                <Refresh />

              </IconButton>

            </Tooltip>

            <Tooltip title="Filters">

              <IconButton
                onClick={() =>
                  setFilterOpen(true)
                }
              >

                <Badge
                  color="primary"
                  badgeContent={
                    Object.keys(filterValues)
                      .length
                  }
                >

                  <FilterAlt />

                </Badge>

              </IconButton>

            </Tooltip>

            <Tooltip title="More">

              <IconButton
                onClick={openMenu}
              >

                <MoreVert />

              </IconButton>

            </Tooltip>

          </Stack>

        }

      />

      {/* ======================================
            Card
      ======================================= */}

      <Card
        sx={{
          borderRadius: 3,
        }}
      >

        <CardContent>

          {/* Search Toolbar */}

          <SearchToolbar

            value={search}

            onChange={setSearch}

          />

          <Divider sx={{ my: 2 }} />

          {/* DataGrid will come in Part 3 */}

          <Box
            sx={{
              minHeight: 500,
            }}
          >

            <Typography
              color="text.secondary"
            >

              DataGrid will be added in
              Part 3...

            </Typography>

          </Box>

        </CardContent>

      </Card>

      {/* ======================================
            Filter Panel
      ======================================= */}

      <FilterPanel

        open={filterOpen}

        filters={filters}

        values={filterValues}

        onClose={() =>
          setFilterOpen(false)
        }

        onApply={setFilterValues}

      />

      {/* ======================================
            Delete Dialog
      ======================================= */}

      <DeleteDialog

        open={Boolean(deleteRow)}

        onClose={() =>
          setDeleteRow(null)
        }

        onConfirm={confirmDelete}

      />

      {/* ======================================
            More Menu
      ======================================= */}

      <Menu

        anchorEl={menuAnchor}

        open={Boolean(menuAnchor)}

        onClose={closeMenu}

      >

        <MenuItem
          onClick={onExport}
        >

          <Download
            sx={{ mr: 1 }}
          />

          Export

        </MenuItem>

        <MenuItem
          onClick={onImport}
        >

          <UploadFile
            sx={{ mr: 1 }}
          />

          Import

        </MenuItem>

        <MenuItem>

          <Print
            sx={{ mr: 1 }}
          />

          Print

        </MenuItem>

        <MenuItem>

          <ViewColumn
            sx={{ mr: 1 }}
          />

          Columns

        </MenuItem>

        <MenuItem>

          <DensityMedium
            sx={{ mr: 1 }}
          />

          Density

        </MenuItem>

      </Menu>

    </Box>

  );

}

/* ==========================================================
    Debounced Search
========================================================== */

const [debouncedSearch, setDebouncedSearch] =
  useState("");

useEffect(() => {

  const timer = setTimeout(() => {

    setDebouncedSearch(search);

  }, 300);

  return () => clearTimeout(timer);

}, [search]);

/* ==========================================================
    Keyboard Shortcut
========================================================== */

useEffect(() => {

  const listener = (e) => {

    if (
      e.ctrlKey &&
      e.key.toLowerCase() === "f"
    ) {

      e.preventDefault();

      document
        .getElementById("master-search")
        ?.focus();

    }

  };

  window.addEventListener(
    "keydown",
    listener
  );

  return () =>

    window.removeEventListener(
      "keydown",
      listener
    );

}, []);

/* ==========================================================
    Apply Filters
========================================================== */

const finalRows = useMemo(() => {

  let data = [...filteredRows];

  Object.entries(filterValues).forEach(
    ([key, value]) => {

      if (
        value === "" ||
        value === null ||
        value === undefined
      )
        return;

      data = data.filter((item) => {

        return (
          String(item[key]) ===
          String(value)
        );

      });

    }
  );

  if (debouncedSearch) {

    const keyword =
      debouncedSearch.toLowerCase();

    data = data.filter((row) =>

      Object.values(row).some(value =>

        String(value)
          .toLowerCase()
          .includes(keyword)

      )

    );

  }

  return data;

}, [
  filteredRows,
  filterValues,
  debouncedSearch,
]);

/* ==========================================================
    Selected Rows
========================================================== */

const selectedData = useMemo(() => {

  return finalRows.filter(row =>
    selectedRows.includes(
      row[rowId]
    )
  );

}, [
  finalRows,
  selectedRows,
  rowId,
]);

/* ==========================================================
    Bulk Delete
========================================================== */

const bulkDelete = () => {

  if (!onDelete) return;

  onDelete(selectedData);

};

/* ==========================================================
    Clear Filters
========================================================== */

const clearFilters = () => {

  setFilterValues({});

};

/* ==========================================================
    Active Filters
========================================================== */

const activeFilters = Object.entries(
  filterValues
).filter(
  ([, value]) =>
    value !== "" &&
    value !== null &&
    value !== undefined
);

<Box
  sx={{
    minHeight: 600,
  }}
>

  {/* DataGrid Part 3 */}

</Box>

/* ===========================================
    Action Settings
=========================================== */

showActions = true,

showView = true,

showEdit = true,

showDelete = true,

showDuplicate = false,

showHistory = false,

customActions = [],