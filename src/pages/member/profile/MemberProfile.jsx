import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProfileHeader from "./ProfileHeader";
import PersonalTab from "./PersonalTab";
import AddressTab from "./AddressTab";
import HierarchyTab from "./HierarchyTab";
import DocumentsTab from "./DocumentsTab";
import TimelineTab from "./TimelineTab";
import HistoryTab from "./HistoryTab";
import ActivityTab from "./ActivityTab";

import {
  fetchMemberById,
} from "../../../redux/slices/memberSlice";

function TabPanel(props) {

  const {
    children,
    value,
    index,
  } = props;

  return (
    <Box
      hidden={value !== index}
      sx={{
        mt: 3,
      }}
    >
      {value === index && children}
    </Box>
  );

}

export default function MemberProfile() {

  const dispatch = useDispatch();

  const { id } = useParams();

  const {
    selectedMember,
    loading,
  } = useSelector(
    state => state.member
  );

  const [tab, setTab] =
    useState(0);

  useEffect(() => {

    dispatch(
      fetchMemberById(id)
    );

  }, [id]);

  if (loading) {

    return (

      <Box
        display="flex"
        justifyContent="center"
        mt={10}
      >

        <CircularProgress />

      </Box>

    );

  }

  return (

    <Box>

      {/* =====================================
          Profile Header
      ====================================== */}

      <ProfileHeader
        member={selectedMember}
      />

      {/* =====================================
          Tabs
      ====================================== */}

      <Card
        sx={{
          mt: 3,
          borderRadius: 4,
        }}
      >

        <Tabs

          value={tab}

          onChange={(e, v) =>
            setTab(v)
          }

          variant="scrollable"

          scrollButtons="auto"

        >

          <Tab label="Personal" />

          <Tab label="Address" />

          <Tab label="Family" />

          <Tab label="Hierarchy" />

          <Tab label="Documents" />

          <Tab label="Timeline" />

          <Tab label="History" />

          <Tab label="Activity" />

        </Tabs>

      </Card>

      {/* =====================================
          Personal
      ====================================== */}

      <TabPanel
        value={tab}
        index={0}
      >

        <PersonalTab
          member={selectedMember}
        />

      </TabPanel>

      {/* =====================================
          Address
      ====================================== */}

      <TabPanel
        value={tab}
        index={1}
      >

        <AddressTab
          member={selectedMember}
        />

      </TabPanel>

      {/* =====================================
          Family
      ====================================== */}

      <TabPanel
        value={tab}
        index={2}
      >

        <FamilyTab
          member={selectedMember}
        />

      </TabPanel>

      {/* =====================================
          Hierarchy
      ====================================== */}

      <TabPanel
        value={tab}
        index={3}
      >

        <HierarchyTab
          member={selectedMember}
        />

      </TabPanel>

      {/* =====================================
          Documents
      ====================================== */}

      <TabPanel
        value={tab}
        index={4}
      >

        <DocumentsTab
          member={selectedMember}
        />

      </TabPanel>

      {/* =====================================
          Timeline
      ====================================== */}

      <TabPanel
        value={tab}
        index={5}
      >

        <TimelineTab
          member={selectedMember}
        />

      </TabPanel>

      {/* =====================================
          Membership History
      ====================================== */}

      <TabPanel
        value={tab}
        index={6}
      >

        <HistoryTab
          member={selectedMember}
        />

      </TabPanel>

      {/* =====================================
          Activity Log
      ====================================== */}

      <TabPanel
        value={tab}
        index={7}
      >

        <ActivityTab
          member={selectedMember}
        />

      </TabPanel>

    </Box>

  );

}