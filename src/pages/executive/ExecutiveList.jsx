import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  MasterList,
} from "../../components/crud";

import {
  fetchExecutives,
  deleteExecutive,
} from "../../redux/slices/executiveSlice";

import { MODULES } from "../../constants/modules";

const columns = [

  {
    field: "memberName",
    headerName: "Member",
    flex: 1,
    minWidth: 220,
  },

  {
    field: "designation",
    headerName: "Designation",
    width: 220,
  },

  {
    field: "level",
    headerName: "Level",
    width: 140,
  },

  {
    field: "state",
    headerName: "State",
    width: 160,
  },

  {
    field: "district",
    headerName: "District",
    width: 180,
  },

  {
    field: "tehsil",
    headerName: "Tehsil",
    width: 180,
  },

  {
    field: "village",
    headerName: "Village",
    width: 180,
  },

  {
    field: "booth",
    headerName: "Booth",
    width: 140,
  },

  {
    field: "appointmentDate",
    headerName: "Appointment",
    width: 150,
    type: "date",
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
    name: "level",
    label: "Level",
    type: "select",
  },

  {
    name: "designation",
    label: "Designation",
    type: "select",
  },

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

export default function ExecutiveList() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {

    executives,

    loading,

    error,

  } = useSelector(

    (state) => state.executive

  );

  useEffect(() => {

    dispatch(fetchExecutives());

  }, [dispatch]);

  return (

    <MasterList

      moduleName={MODULES.EXECUTIVE}

      title="Executive Management"

      subtitle="Manage organization executives"

      rows={executives}

      columns={columns}

      filters={filters}

      loading={loading}

      error={error}

      rowId="id"

      onAdd={() =>

        navigate("/executives/new")

      }

      onView={(row) =>

        navigate(

          `/executives/${row.id}`

        )

      }

      onEdit={(row) =>

        navigate(

          `/executives/edit/${row.id}`

        )

      }

      onDelete={(row) =>

        dispatch(deleteExecutive(row.id))

      }

      onRefresh={() =>

        dispatch(fetchExecutives())

      }

    />

  );

}