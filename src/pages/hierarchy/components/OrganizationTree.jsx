import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  InputAdornment,
  Typography,
  Box,
  Chip,
  Stack,
} from "@mui/material";

import {
  Search,
  Public,
  LocationCity,
  AccountTree,
  HolidayVillage,
  HowToVote,
  Groups,
} from "@mui/icons-material";

import {
  SimpleTreeView,
  TreeItem,
} from "@mui/x-tree-view";

const hierarchy = [
  {
    id: "india",
    label: "India",
    icon: <Public />,
    count: "",
    children: [
      {
        id: "rj",
        label: "Rajasthan",
        icon: <LocationCity />,
        count: "3.2L",
        children: [
          {
            id: "jaipur",
            label: "Jaipur",
            icon: <LocationCity />,
            count: "82K",
            children: [
              {
                id: "sanganer",
                label: "Sanganer",
                icon: <AccountTree />,
                count: "24K",
                children: [
                  {
                    id: "village1",
                    label: "Village A",
                    icon: <HolidayVillage />,
                    count: "4,250",
                    children: [
                      {
                        id: "booth1",
                        label: "Booth 001",
                        icon: <HowToVote />,
                        count: "528",
                      },
                      {
                        id: "booth2",
                        label: "Booth 002",
                        icon: <HowToVote />,
                        count: "612",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "hr",
        label: "Haryana",
        icon: <LocationCity />,
        count: "2.4L",
      },
      {
        id: "dl",
        label: "Delhi",
        icon: <LocationCity />,
        count: "1.1L",
      },
    ],
  },
];

function renderTree(nodes, keyword) {

  const visible =
    !keyword ||
    nodes.label
      .toLowerCase()
      .includes(keyword.toLowerCase());

  const childNodes = nodes.children
    ?.map((child) => renderTree(child, keyword))
    .filter(Boolean);

  if (!visible && (!childNodes || childNodes.length === 0))
    return null;

  return (
    <TreeItem
      key={nodes.id}
      itemId={nodes.id}
      label={
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >
          {nodes.icon}

          <Typography
            fontWeight={500}
          >
            {nodes.label}
          </Typography>

          {nodes.count && (
            <Chip
              size="small"
              color="primary"
              icon={<Groups />}
              label={nodes.count}
            />
          )}
        </Stack>
      }
    >
      {childNodes}
    </TreeItem>
  );
}

export default function OrganizationTree() {

  const [search, setSearch] =
    useState("");

  return (

    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >

      <CardHeader
        title="Organization Tree"
        subheader="Complete organizational hierarchy"
      />

      <CardContent>

        <TextField
          fullWidth
          size="small"
          placeholder="Search State, District, Village..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <Box
          sx={{
            mt: 3,
            maxHeight: 550,
            overflow: "auto",
          }}
        >

          <SimpleTreeView>

            {hierarchy.map((node) =>
              renderTree(node, search)
            )}

          </SimpleTreeView>

        </Box>

      </CardContent>

    </Card>

  );

}