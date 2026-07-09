import React, {
  useEffect,
  useState,
} from "react";

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Chip,
} from "@mui/material";

import {
  Event,
  CheckCircle,
  Cancel,
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
  fetchCommitteeMeetings,
  deleteMeeting,
} from "../../redux/slices/committeeSlice";

export default function CommitteeMeetings() {

  const dispatch = useDispatch();

  const { id } = useParams();

  const [openMeetingDialog, setOpenMeetingDialog] =
    useState(false);

  const {

    meetings,

    loading,

  } = useSelector(

    state => state.committee

  );

  useEffect(() => {

    dispatch(

      fetchCommitteeMeetings(id)

    );

  }, [dispatch, id]);

  const columns = [

    {

      field: "meetingDate",

      headerName: "Meeting Date",

      width: 160,

      type: "date",

    },

    {

      field: "title",

      headerName: "Meeting Title",

      flex: 1,

      minWidth: 220,

    },

    {

      field: "venue",

      headerName: "Venue",

      width: 220,

    },

    {

      field: "agenda",

      headerName: "Agenda",

      flex: 1,

      minWidth: 250,

    },

    {

      field: "attendance",

      headerName: "Attendance",

      width: 140,

      type: "progress",

    },

    {

      field: "status",

      headerName: "Status",

      width: 150,

      renderCell: ({ value }) => (

        <Chip

          color={

            value === "Completed"

              ? "success"

              : value === "Scheduled"

              ? "primary"

              : "warning"

          }

          label={value}

        />

      ),

    },

  ];

  return (

<Box>

<Card>

<CardHeader

title="Committee Meetings"

action={

<Button

variant="contained"

startIcon={<Event/>}

onClick={()=>

setOpenMeetingDialog(true)

}

>

Schedule Meeting

</Button>

}

/>

<CardContent>

<MasterList

moduleName="committee-meetings"

rows={meetings}

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

deleteMeeting({

committeeId:id,

meetingId:row.id,

})

)

}

/>

</CardContent>

</Card>

</Box>

);

}