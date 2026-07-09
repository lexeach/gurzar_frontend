import {
  useEffect,
  useMemo,
  useCallback,
} from "react";

import {
  useForm,
} from "react-hook-form";

export default function useDynamicForm({

  formId,

  schema = [],

  defaultValues = {},

  mode = "onChange",

  autoSave = false,

  autoSaveInterval = 3000,

  rememberDraft = true,

}) {

  const methods = useForm({

    mode,

    defaultValues,

  });

  const {

    watch,

    reset,

    setValue,

    getValues,

    trigger,

    handleSubmit,

    formState,

  } = methods;

  const {

    isDirty,

    isSubmitting,

    isValid,

    errors,

  } = formState;

  const values = watch();}