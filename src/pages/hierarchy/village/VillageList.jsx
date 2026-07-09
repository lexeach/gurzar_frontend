import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  MasterList,
} from "../../../components/crud";

import {
  fetchVillages,
  deleteVillage,
} from "../../../redux/slices/villageSlice";

import { MODULES } from "../../../constants/modules";

const columns = [

  {
    field: "villageCode",
    headerName: "Code",
    width: 120,
  },

  {
    field: "villageName",
    headerName: "Village",
    flex: 1,
    minWidth: 220,
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
    field: "state",
    headerName: "State",
    width: 160,
  },

  {
    field: "population",
    headerName: "Population",
    width: 140,
    type: "number",
  },

  {
    field: "booths",
    headerName: "Booths",
    width: 120,
    type: "number",
  },

  {
    field: "members",
    headerName: "Members",
    width: 130,
    type: "number",
  },

  {
    field: "active",
    headerName: "Status",
    width: 130,
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
    name: "active",
    label: "Status",
    type: "status",
  },

];

export default function VillageList() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {

    villages,

    loading,

    error,

  } = useSelector(

    (state) => state.village

  );

  useEffect(() => {

    dispatch(fetchVillages());

  }, [dispatch]);

  return (

    <MasterList

      moduleName={MODULES.VILLAGE}

      title="Village Management"

      subtitle="Manage villages under each tehsil"

      rows={villages}

      columns={columns}

      loading={loading}

      error={error}

      filters={filters}

      rowId="id"

      onAdd={() =>

        navigate("/hierarchy/villages/new")

      }

      onView={(row) =>

        navigate(

          `/hierarchy/villages/${row.id}`

        )

      }

      onEdit={(row) =>

        navigate(

          `/hierarchy/villages/edit/${row.id}`

        )

      }

      onDelete={(row) =>

        dispatch(deleteVillage(row.id))

      }

      onRefresh={() =>

        dispatch(fetchVillages())

      }

    />

  );

}
