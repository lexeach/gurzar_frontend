import React from "react";

import {
  Controller,
  useFormContext,
} from "react-hook-form";

import {
  TextField,
  MenuItem,
  FormControlLabel,
  Switch,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormHelperText,
  Autocomplete,
} from "@mui/material";

export default function FieldRenderer({

  field,

  readOnly = false,

  disabled = false,

}) {

  const {

    control,

  } = useFormContext();

  const isDisabled =
    disabled ||
    readOnly ||
    field.disabled;

  switch (field.type) {

    /* ===========================
        TEXT
    =========================== */

    case "text":

      return (

        <Controller

          name={field.name}

          control={control}

          rules={field.rules}

          render={({

            field: controller,

            fieldState,

          }) => (

            <TextField

              {...controller}

              fullWidth

              label={field.label}

              placeholder={field.placeholder}

              helperText={
                fieldState.error?.message ||
                field.helperText
              }

              error={
                !!fieldState.error
              }

              disabled={isDisabled}

            />

          )}

        />

      );

    /* ===========================
        NUMBER
    =========================== */

    case "number":

      return (

        <Controller

          name={field.name}

          control={control}

          rules={field.rules}

          render={({

            field: controller,

            fieldState,

          }) => (

            <TextField

              {...controller}

              type="number"

              fullWidth

              label={field.label}

              helperText={
                fieldState.error?.message
              }

              error={
                !!fieldState.error
              }

              disabled={isDisabled}

            />

          )}

        />

      );

    /* ===========================
        EMAIL
    =========================== */

    case "email":

      return (

        <Controller

          name={field.name}

          control={control}

          rules={field.rules}

          render={({

            field: controller,

            fieldState,

          }) => (

            <TextField

              {...controller}

              type="email"

              fullWidth

              label={field.label}

              error={
                !!fieldState.error
              }

              helperText={
                fieldState.error?.message
              }

              disabled={isDisabled}

            />

          )}

        />

      );

    /* ===========================
        PASSWORD
    =========================== */

    case "password":

      return (

        <Controller

          name={field.name}

          control={control}

          rules={field.rules}

          render={({

            field: controller,

            fieldState,

          }) => (

            <TextField

              {...controller}

              type="password"

              fullWidth

              label={field.label}

              error={
                !!fieldState.error
              }

              helperText={
                fieldState.error?.message
              }

              disabled={isDisabled}

            />

          )}

        />

      );

    /* ===========================
        TEXTAREA
    =========================== */

    case "textarea":

      return (

        <Controller

          name={field.name}

          control={control}

          rules={field.rules}

          render={({

            field: controller,

            fieldState,

          }) => (

            <TextField

              {...controller}

              fullWidth

              multiline

              minRows={4}

              label={field.label}

              helperText={
                fieldState.error?.message
              }

              error={
                !!fieldState.error
              }

              disabled={isDisabled}

            />

          )}

        />

      );

    /* ===========================
        SELECT
    =========================== */

    case "select":

      return (

        <Controller

          name={field.name}

          control={control}

          rules={field.rules}

          render={({

            field: controller,

            fieldState,

          }) => (

            <TextField

              {...controller}

              select

              fullWidth

              label={field.label}

              helperText={
                fieldState.error?.message
              }

              error={
                !!fieldState.error
              }

              disabled={isDisabled}

            >

              {(field.options || []).map(
                (item) => (

                  <MenuItem

                    key={item.value}

                    value={item.value}

                  >

                    {item.label}

                  </MenuItem>

                )
              )}

            </TextField>

          )}

        />

      );

    /* ===========================
        AUTOCOMPLETE
    =========================== */

    case "autocomplete":

      return (

        <Controller

          name={field.name}

          control={control}

          render={({ field: controller }) => (

            <Autocomplete

              options={
                field.options || []
              }

              value={
                controller.value || null
              }

              onChange={(_, value) =>
                controller.onChange(value)
              }

              getOptionLabel={(option) =>
                option.label || ""
              }

              renderInput={(params) => (

                <TextField

                  {...params}

                  label={field.label}

                />

              )}

              disabled={isDisabled}

            />

          )}

        />

      );

    /* ===========================
        SWITCH
    =========================== */

    case "switch":

      return (

        <Controller

          name={field.name}

          control={control}

          render={({ field: controller }) => (

            <FormControlLabel

              control={

                <Switch

                  checked={
                    controller.value
                  }

                  onChange={controller.onChange}

                  disabled={isDisabled}

                />

              }

              label={field.label}

            />

          )}

        />

      );

    /* ===========================
        CHECKBOX
    =========================== */

    case "checkbox":

      return (

        <Controller

          name={field.name}

          control={control}

          render={({ field: controller }) => (

            <FormControlLabel

              control={

                <Checkbox

                  checked={
                    controller.value
                  }

                  onChange={controller.onChange}

                  disabled={isDisabled}

                />

              }

              label={field.label}

            />

          )}

        />

      );

    /* ===========================
        RADIO
    =========================== */

    case "radio":

      return (

        <Controller

          name={field.name}

          control={control}

          render={({ field: controller }) => (

            <FormControl>

              <FormLabel>

                {field.label}

              </FormLabel>

              <RadioGroup

                {...controller}

              >

                {(field.options || []).map(
                  (item) => (

                    <FormControlLabel

                      key={item.value}

                      value={item.value}

                      control={<Radio />}

                      label={item.label}

                    />

                  )
                )}

              </RadioGroup>

              <FormHelperText>
                {field.helperText}
              </FormHelperText>

            </FormControl>

          )}

        />

      );

    /* ===========================
        DEFAULT
    =========================== */

    default:

      return (

        <TextField

          fullWidth

          disabled

          value={`Unsupported field type: ${field.type}`}

        />

      );

  }

}