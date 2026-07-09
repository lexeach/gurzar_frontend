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
  LinearProgress,
} from "@mui/material";

import {
  Assignment,
  Warning,
  CheckCircle,
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
  fetchCommitteeTasks,
  deleteTask,
} from "../../redux/slices/committeeSlice";

export default function CommitteeTasks() {

  const dispatch = useDispatch();

  const { id } = useParams();

  const [openTaskDialog, setOpenTaskDialog] =
    useState(false);

  const {

    tasks,

    loading,

  } = useSelector(

    state => state.committee

  );

  useEffect(() => {

    dispatch(

      fetchCommitteeTasks(id)

    );

  }, [dispatch, id]);

  const columns = [

    {
      field: "taskTitle",
      headerName: "Task",
      flex: 1,
      minWidth: 250,
    },

    {
      field: "assignedTo",
      headerName: "Assigned To",
      width: 220,
    },

    {
      field: "priority",
      headerName: "Priority",
      width: 150,
      renderCell: ({ value }) => (

        <Chip

          label={value}

          color={
            value === "Critical"
              ? "error"
              : value === "High"
              ? "warning"
              : value === "Medium"
              ? "primary"
              : "default"
          }

        />

      ),
    },

    {
      field: "dueDate",
      headerName: "Due Date",
      width: 150,
      type: "date",
    },

    {
      field: "progress",
      headerName: "Progress",
      width: 180,
      renderCell: ({ value }) => (

        <Box width="100%">

          <LinearProgress

            variant="determinate"

            value={value}

          />

        </Box>

      ),
    },

    {
      field: "status",
      headerName: "Status",
      width: 170,
      renderCell: ({ value }) => (

        <Chip

          icon={

            value === "Completed"

              ? <CheckCircle/>

              : <Warning/>

          }

          label={value}

          color={

            value === "Completed"

              ? "success"

              : value === "In Progress"

              ? "primary"

              : value === "Overdue"

              ? "error"

              : "warning"

          }

        />

      ),
    },

  ];

  return (

<Box>

<Card>

<CardHeader

title="Committee Tasks"

action={

<Button

variant="contained"

startIcon={<Assignment/>}

onClick={()=>

setOpenTaskDialog(true)

}

>

Assign Task

</Button>

}

/>

<CardContent>

<MasterList

moduleName="committee-tasks"

rows={tasks}

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

deleteTask({

committeeId:id,

taskId:row.id,

})

)

}

/>

</CardContent>

</Card>

</Box>

);

}