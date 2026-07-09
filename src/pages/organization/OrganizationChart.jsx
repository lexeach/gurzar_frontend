import React, {
  useEffect,
} from "react";

import {
  Box,
  Grid,
} from "@mui/material";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import OrganizationToolbar from "./OrganizationToolbar";
import OrganizationFilters from "./OrganizationFilters";
import OrganizationLegend from "./OrganizationLegend";
import OrganizationNode from "./OrganizationNode";

import {
  fetchOrganizationTree,
} from "../../redux/slices/organizationSlice";

export default function OrganizationChart() {

  const dispatch = useDispatch();

  const {

    tree,

    loading,

  } = useSelector(

    state => state.organization

  );

  useEffect(() => {

    dispatch(

      fetchOrganizationTree()

    );

  }, [dispatch]);

  return (

    <Box>

      <OrganizationToolbar />

      <OrganizationFilters />

      <Grid container spacing={3}>

        <Grid item xs={12} md={9}>

          <OrganizationNode

            node={tree}

          />

        </Grid>

        <Grid item xs={12} md={3}>

          <OrganizationLegend />

        </Grid>

      </Grid>

    </Box>

  );

}
