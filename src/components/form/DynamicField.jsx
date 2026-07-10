import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import {
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";

export default function DynamicField({

  field,

  value,

  onChange,

}) {

  const methods = useFormContext();

  const control = methods?.control;

  const renderField = (props = {}) => {

    switch (field.type) {

      case "select":

        return (

          <FormControl fullWidth>

            <InputLabel>

              {field.label}

            </InputLabel>

            <Select

              label={field.label}

              {...props}

            >

              {

                (field.options || []).map(option => (

                  <MenuItem

                    key={option.value}

                    value={option.value}

                  >

                    {option.label}

                  </MenuItem>

                ))

              }

            </Select>

          </FormControl>

        );

      case "checkbox":

        return (

          <FormControlLabel

            control={

              <Checkbox

                checked={!!props.value}

                {...props}

              />

            }

            label={field.label}

          />

        );

      case "switch":

        return (

          <FormControlLabel

            control={

              <Switch

                checked={!!props.value}

                {...props}

              />

            }

            label={field.label}

          />

        );

      case "number":

        return (

          <TextField

            fullWidth

            type="number"

            label={field.label}

            {...props}

          />

        );

      case "date":

        return (

          <TextField

            fullWidth

            type="date"

            label={field.label}

            InputLabelProps={{

              shrink: true,

            }}

            {...props}

          />

        );

      case "email":

        return (

          <TextField

            fullWidth

            type="email"

            label={field.label}

            {...props}

          />

        );

      case "password":

        return (

          <TextField

            fullWidth

            type="password"

            label={field.label}

            {...props}

          />

        );

      case "textarea":

        return (

          <TextField

            fullWidth

            multiline

            rows={4}

            label={field.label}

            {...props}

          />

        );

      default:

        return (

          <TextField

            fullWidth

            type="text"

            label={field.label}

            {...props}

          />

        );

    }

  };

  /* ==========================================================
     React Hook Form Mode
  ========================================================== */

  if (control) {

    return (

      <Controller

        name={field.name}

        control={control}

        defaultValue={field.defaultValue || ""}

        render={({ field: controllerField, fieldState }) =>

          React.cloneElement(

            renderField(controllerField),

            {

              error: !!fieldState.error,

              helperText:

                fieldState.error?.message,

            }

          )

        }

      />

    );

  }

  /* ==========================================================
     Standalone Mode
  ========================================================== */

  return renderField({

    value,

    onChange: e =>

      onChange?.(

        e.target.value

      ),

  });

}