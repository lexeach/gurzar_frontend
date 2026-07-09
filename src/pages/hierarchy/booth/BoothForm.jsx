import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { MasterForm } from "../../../components/crud";

import boothSchema from "./boothSchema";

import {
  createBooth,
  updateBooth,
  fetchBoothById,
  clearSelectedBooth,
} from "../../../redux/slices/boothSlice";

export default function BoothForm() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const {
    selectedBooth,
    loading,
  } = useSelector((state) => state.booth);

  useEffect(() => {

    if (id) {

      dispatch(fetchBoothById(id));

    } else {

      dispatch(clearSelectedBooth());

    }

    return () => {

      dispatch(clearSelectedBooth());

    };

  }, [dispatch, id]);

  const initialValues =
    selectedBooth || {

      stateCode: "",

      district: "",

      tehsil: "",

      village: "",

      boothNumber: "",

      boothName: "",

      pollingStation: "",

      pollingAddress: "",

      totalVoters: 0,

      maleVoters: 0,

      femaleVoters: 0,

      otherVoters: 0,

      boothPresident: null,

      boothIncharge: null,

      latitude: "",

      longitude: "",

      active: true,

      remarks: "",

    };

  const handleSubmit = async (data) => {

    if (id) {

      await dispatch(

        updateBooth({

          id,

          ...data,

        })

      );

    } else {

      await dispatch(

        createBooth(data)

      );

    }

    navigate("/hierarchy/booths");

  };

  return (

    <MasterForm

      title={
        id
          ? "Edit Booth"
          : "Add Booth"
      }

      subtitle="Polling Booth Information"

      schema={boothSchema}

      initialValues={initialValues}

      loading={loading}

      autoSave

      rememberDraft

      showSave

      showReset

      showBack

      onSubmit={handleSubmit}

      onCancel={() =>

        navigate("/hierarchy/booths")

      }

    />

  );

}