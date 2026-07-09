import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  MasterForm,
} from "../../components/crud";

import committeeSchema from "./committeeSchema";

import {
  createCommittee,
  updateCommittee,
  fetchCommitteeById,
  clearSelectedCommittee,
} from "../../redux/slices/committeeSlice";

export default function CommitteeForm() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const {

    selectedCommittee,

    loading,

  } = useSelector(

    state => state.committee

  );

  useEffect(() => {

    if (id) {

      dispatch(fetchCommitteeById(id));

    } else {

      dispatch(clearSelectedCommittee());

    }

    return () => {

      dispatch(clearSelectedCommittee());

    };

  }, [dispatch, id]);

  const initialValues =

    selectedCommittee ||

    {

      committeeName: "",

      committeeType: "",

      level: "",

      stateCode: "",

      district: "",

      tehsil: "",

      village: "",

      booth: "",

      president: null,

      vicePresident: null,

      secretary: null,

      treasurer: null,

      formationDate: "",

      termEndDate: "",

      active: true,

      remarks: "",

    };

  const handleSubmit = async (data) => {

    if (id) {

      await dispatch(

        updateCommittee({

          id,

          ...data,

        })

      );

    } else {

      await dispatch(

        createCommittee(data)

      );

    }

    navigate("/committees");

  };

  return (

    <MasterForm

      title={

        id

          ? "Edit Committee"

          : "Create Committee"

      }

      subtitle="Committee Information"

      schema={committeeSchema}

      initialValues={initialValues}

      loading={loading}

      autoSave

      rememberDraft

      showSave

      showReset

      showBack

      onSubmit={handleSubmit}

      onCancel={() =>

        navigate("/committees")

      }

    />

  );

}