import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  MasterList,
} from "../../components/crud";

import {
  fetchCommittees,
  deleteCommittee,
} from "../../redux/slices/committeeSlice";

import { MODULES } from "../../constants/modules";

const columns = [

  {
    field: "committeeName",
    headerName: "Committee",
    flex: 1,
    minWidth: 220,
  },

  {
    field: "committeeType",
    headerName: "Type",
    width: 180,
  },

  {
    field: "level",
    headerName: "Level",
    width: 140,
  },

  {
    field: "presidentName",
    headerName: "President",
    width: 220,
  },

  {
    field: "secretaryName",
    headerName: "Secretary",
    width: 220,
  },

  {
    field: "memberCount",
    headerName: "Members",
    width: 130,
    type: "number",
  },

  {
    field: "meetingCount",
    headerName: "Meetings",
    width: 130,
    type: "number",
  },

  {
    field: "taskCount",
    headerName: "Tasks",
    width: 120,
    type: "number",
  },

  {
    field: "performance",
    headerName: "Performance",
    width: 150,
    type: "number",
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
    name: "committeeType",
    label: "Committee Type",
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
    name: "active",
    label: "Status",
    type: "status",
  },

];

export default function CommitteeList() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {

    committees,

    loading,

    error,

  } = useSelector(

    (state) => state.committee

  );

  useEffect(() => {

    dispatch(fetchCommittees());

  }, [dispatch]);

  return (

    <MasterList

      moduleName={MODULES.COMMITTEE}

      title="Committee Management"

      subtitle="Manage organization committees"

      rows={committees}

      columns={columns}

      filters={filters}

      loading={loading}

      error={error}

      rowId="id"

      onAdd={() =>

        navigate("/committees/new")

      }

      onView={(row) =>

        navigate(

          `/committees/${row.id}`

        )

      }

      onEdit={(row) =>

        navigate(

          `/committees/edit/${row.id}`

        )

      }

      onDelete={(row) =>

        dispatch(deleteCommittee(row.id))

      }

      onRefresh={() =>

        dispatch(fetchCommittees())

      }

    />

  );

}