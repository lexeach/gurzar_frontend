import React from "react";

import {
  Box,
  Stack,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";

import {
  Save,
  Add,
  ArrowBack,
  RestartAlt,
  Delete,
  Print,
  Visibility,
  CheckCircle,
  Cancel,
} from "@mui/icons-material";

export default function FormToolbar({

  loading = false,

  readOnly = false,

  isDirty = false,

  canSave = true,

  canDelete = false,

  canApprove = false,

  canReject = false,

  showSave = true,

  showSaveNew = false,

  showSaveContinue = false,

  showReset = true,

  showBack = true,

  showDelete = false,

  showPrint = false,

  showPreview = false,

  showApprove = false,

  showReject = false,

  sticky = true,

  onSave,

  onSaveNew,

  onSaveContinue,

  onReset,

  onBack,

  onDelete,

  onPrint,

  onPreview,

  onApprove,

  onReject,

  children,

}) {

  return (

    <Box

      sx={{

        position: sticky ? "sticky" : "static",

        bottom: 0,

        bgcolor: "background.paper",

        borderTop: "1px solid",

        borderColor: "divider",

        mt: 3,

        pt: 2,

        pb: 1,

        zIndex: 10,

      }}

    >

      <Divider sx={{ mb: 2 }} />

      <Stack

        direction={{

          xs: "column",

          md: "row",

        }}

        justifyContent="space-between"

        alignItems="center"

        spacing={2}

      >

        <Stack

          direction="row"

          spacing={2}

          flexWrap="wrap"

          useFlexGap

        >

          {showSave && canSave && !readOnly && (

            <Button

              variant="contained"

              startIcon={

                loading

                  ? (

                    <CircularProgress

                      size={18}

                      color="inherit"

                    />

                  )

                  : (

                    <Save />

                  )

              }

              disabled={loading}

              onClick={onSave}

            >

              Save

            </Button>

          )}

          {showSaveNew && (

            <Button

              variant="outlined"

              startIcon={<Add />}

              onClick={onSaveNew}

            >

              Save & New

            </Button>

          )}

          {showSaveContinue && (

            <Button

              variant="outlined"

              startIcon={<Save />}

              onClick={onSaveContinue}

            >

              Save & Continue

            </Button>

          )}

          {showReset && !readOnly && (

            <Button

              variant="outlined"

              startIcon={<RestartAlt />}

              onClick={onReset}

              disabled={!isDirty}

            >

              Reset

            </Button>

          )}

          {showBack && (

            <Button

              variant="outlined"

              startIcon={<ArrowBack />}

              onClick={onBack}

            >

              Back

            </Button>

          )}

        </Stack>

        <Stack

          direction="row"

          spacing={2}

          flexWrap="wrap"

          useFlexGap

        >

          {showPreview && (

            <Button

              color="info"

              startIcon={<Visibility />}

              onClick={onPreview}

            >

              Preview

            </Button>

          )}

          {showPrint && (

            <Button

              color="secondary"

              startIcon={<Print />}

              onClick={onPrint}

            >

              Print

            </Button>

          )}

          {showApprove && canApprove && (

            <Button

              color="success"

              variant="contained"

              startIcon={<CheckCircle />}

              onClick={onApprove}

            >

              Approve

            </Button>

          )}

          {showReject && canReject && (

            <Button

              color="warning"

              variant="contained"

              startIcon={<Cancel />}

              onClick={onReject}

            >

              Reject

            </Button>

          )}

          {showDelete && canDelete && !readOnly && (

            <Button

              color="error"

              variant="contained"

              startIcon={<Delete />}

              onClick={onDelete}

            >

              Delete

            </Button>

          )}

          {children}

        </Stack>

      </Stack>

    </Box>

  );

}