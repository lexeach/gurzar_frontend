import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  MasterList,
} from "../../../components/crud";

import {
  fetchBooths,
  deleteBooth,
} from "../../../redux/slices/boothSlice";

import { MODULES } from "../../../constants/modules";

const columns = [

  {
    field: "boothNumber",
    headerName: "Booth No.",
    width: 120,
  },

  {
    field: "boothName",
    headerName: "Booth Name",
    flex: 1,
    minWidth: 220,
  },

  {
    field: "pollingStation",
    headerName: "Polling Station",
    flex: 1,
    minWidth: 250,
  },

  {
    field: "village",
    headerName: "Village",
    width: 180,
  },

  {
    field: "tehsil",
    headerName: "Tehsil",
    width: 180,
  },

  {
    field: "district",
    headerName: "District",
    width: 180,
  },

  {
    field: "totalVoters",
    headerName: "Total Voters",
    width: 140,
    type: "number",
  },

  {
    field: "maleVoters",
    headerName: "Male",
    width: 100,
    type: "number",
  },

  {
    field: "femaleVoters",
    headerName: "Female",
    width: 110,
    type: "number",
  },

  {
    field: "boothPresident",
    headerName: "President",
    width: 180,
  },

  {
    field: "boothIncharge",
    headerName: "Incharge",
    width: 180,
  },

  {
    field: "active",
    headerName: "Status",
    width: 120,
    type: "boolean",
  },

];

const filters = [

  {
    name: "stateCode",
    label: "State",
    type: "state",
  },

  {
    name: "district",
    label: "District",
    type: "district",
  },

  {
    name: "tehsil",
    label: "Tehsil",
    type: "tehsil",
  },

  {
    name: "village",
    label: "Village",
    type: "village",
  },

  {
    name: "active",
    label: "Status",
    type: "status",
  },

];

export default function BoothList() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {

    booths,

    loading,

    error,

  } = useSelector(

    (state) => state.booth

  );

  useEffect(() => {

    dispatch(fetchBooths());

  }, [dispatch]);

  return (

    <MasterList

      moduleName={MODULES.BOOTH}

      title="Booth Management"

      subtitle="Manage polling booths"

      rows={booths}

      columns={columns}

      loading={loading}

      error={error}

      filters={filters}

      rowId="id"

      onAdd={() =>

        navigate("/hierarchy/booths/new")

      }

      onView={(row) =>

        navigate(

          `/hierarchy/booths/${row.id}`

        )

      }

      onEdit={(row) =>

        navigate(

          `/hierarchy/booths/edit/${row.id}`

        )

      }

      onDelete={(row) =>

        dispatch(deleteBooth(row.id))

      }

      onRefresh={() =>

        dispatch(fetchBooths())

      }

    />

  );

}