import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  MasterForm,
} from "../../../components/crud";

import villageSchema from "./villageSchema";

import {
  createVillage,
  updateVillage,
  fetchVillageById,
  clearSelectedVillage,
} from "../../../redux/slices/villageSlice";

export default function VillageForm() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const {

    selectedVillage,

    loading,

  } = useSelector(
    (state) => state.village
  );

  useEffect(() => {

    if (id) {

      dispatch(fetchVillageById(id));

    } else {

      dispatch(clearSelectedVillage());

    }

    return () => {

      dispatch(clearSelectedVillage());

    };

  }, [dispatch, id]);

  const initialValues =

    selectedVillage ||

    {

      stateCode: "",

      district: "",

      tehsil: "",

      villageCode: "",

      villageName: "",

      hindiName: "",

      pincode: "",

      population: "",

      latitude: "",

      longitude: "",

      active: true,

      remarks: "",

    };

  const handleSubmit = async (data) => {

    if (id) {

      await dispatch(

        updateVillage({

          id,

          ...data,

        })

      );

    } else {

      await dispatch(

        createVillage(data)

      );

    }

    navigate("/hierarchy/villages");

  };

  return (

    <MasterForm

      title={
        id
          ? "Edit Village"
          : "Add Village"
      }

      subtitle="Village Information"

      schema={villageSchema}

      initialValues={initialValues}

      loading={loading}

      autoSave

      rememberDraft

      showSave

      showReset

      showBack

      onSubmit={handleSubmit}

      onCancel={() =>

        navigate("/hierarchy/villages")

      }

    />

  );

}