import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  MasterForm,
} from "../../components/crud";

import executiveSchema from "./executiveSchema";

import {
  createExecutive,
  updateExecutive,
  fetchExecutiveById,
  clearSelectedExecutive,
} from "../../redux/slices/executiveSlice";

export default function ExecutiveForm() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const {

    selectedExecutive,

    loading,

  } = useSelector(

    (state) => state.executive

  );

  useEffect(() => {

    if (id) {

      dispatch(fetchExecutiveById(id));

    } else {

      dispatch(clearSelectedExecutive());

    }

    return () => {

      dispatch(clearSelectedExecutive());

    };

  }, [dispatch, id]);

  const initialValues =

    selectedExecutive ||

    {

      member: null,

      photo: null,

      level: "",

      designation: "",

      department: "",

      stateCode: "",

      district: "",

      tehsil: "",

      village: "",

      booth: "",

      reportsTo: null,

      appointmentType: "",

      appointmentOrder: "",

      appointmentDate: "",

      termEndDate: "",

      officialMobile: "",

      officialEmail: "",

      whatsapp: "",

      target: 0,

      achievement: 0,

      rating: 0,

      active: true,

      remarks: "",

    };

  const handleSubmit = async (data) => {

    if (id) {

      await dispatch(

        updateExecutive({

          id,

          ...data,

        })

      );

    } else {

      await dispatch(

        createExecutive(data)

      );

    }

    navigate("/executives");

  };

  return (

    <MasterForm

      title={
        id
          ? "Edit Executive"
          : "Add Executive"
      }

      subtitle="Executive Information"

      schema={executiveSchema}

      initialValues={initialValues}

      loading={loading}

      autoSave

      rememberDraft

      showSave

      showReset

      showBack

      onSubmit={handleSubmit}

      onCancel={() =>
        navigate("/executives")
      }

    />

  );

}