import React, {
  useEffect,
  useState,
} from "react";

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Button,
  Chip,
} from "@mui/material";

import {
  PersonAdd,
  Delete,
  Edit,
} from "@mui/icons-material";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useParams } from "react-router-dom";

import {
  MasterList,
} from "../../components/crud";

import {
  fetchCommitteeMembers,
  removeCommitteeMember,
} from "../../redux/slices/committeeSlice";

export default function CommitteeMembers() {

  const dispatch = useDispatch();

  const { id } = useParams();

  const [openAssignDialog, setOpenAssignDialog] =
    useState(false);

  const {

    members,

    loading,

  } = useSelector(

    state => state.committee

  );

  useEffect(() => {

    dispatch(

      fetchCommitteeMembers(id)

    );

  }, [dispatch, id]);

  const columns = [

    {

      field: "photo",

      headerName: "",

      width: 70,

      type: "avatar",

    },

    {

      field: "memberName",

      headerName: "Member",

      flex: 1,

    },

    {

      field: "designation",

      headerName: "Designation",

      width: 200,

    },

    {

      field: "committeeRole",

      headerName: "Committee Role",

      width: 220,

    },

    {

      field: "mobile",

      headerName: "Mobile",

      width: 160,

    },

    {

      field: "attendance",

      headerName: "Attendance",

      width: 150,

      type: "progress",

    },

    {

      field: "taskCompletion",

      headerName: "Task Completion",

      width: 170,

      type: "progress",

    },

    {

      field: "active",

      headerName: "Status",

      width: 120,

      type: "boolean",

    },

  ];

  return (

<Box>

<Card>

<CardHeader

title="Committee Members"

action={

<Button

variant="contained"

startIcon={<PersonAdd/>}

onClick={()=>

setOpenAssignDialog(true)

}

>

Assign Member

</Button>

}

/>

<CardContent>

<MasterList

moduleName="committee-members"

rows={members}

columns={columns}

loading={loading}

rowId="id"

showFilters={false}

showImport={false}

showExport={false}

showAdd={false}

onEdit={(row)=>{}}

onDelete={(row)=>

dispatch(

removeCommitteeMember({

committeeId:id,

memberId:row.id,

})

)

}

/>

</CardContent>

</Card>

</Box>

);

}