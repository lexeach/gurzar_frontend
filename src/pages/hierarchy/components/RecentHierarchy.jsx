import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import {
  Visibility,
  Edit,
  Public,
  LocationCity,
  AccountTree,
  HolidayVillage,
  HowToVote,
} from "@mui/icons-material";

const recentItems = [

  {
    id: 1,
    type: "State",
    name: "Rajasthan",
    createdBy: "Super Admin",
    createdAt: "05 Jul 2026 10:30 AM",
    icon: <Public />,
    color: "#1976D2",
  },

  {
    id: 2,
    type: "District",
    name: "Jaipur",
    createdBy: "State Admin",
    createdAt: "05 Jul 2026 11:15 AM",
    icon: <LocationCity />,
    color: "#2E7D32",
  },

  {
    id: 3,
    type: "Tehsil",
    name: "Sanganer",
    createdBy: "District Admin",
    createdAt: "05 Jul 2026 01:20 PM",
    icon: <AccountTree />,
    color: "#F57C00",
  },

  {
    id: 4,
    type: "Village",
    name: "Village A",
    createdBy: "Tehsil Admin",
    createdAt: "06 Jul 2026 09:10 AM",
    icon: <HolidayVillage />,
    color: "#8E24AA",
  },

  {
    id: 5,
    type: "Booth",
    name: "Booth 001",
    createdBy: "Village Coordinator",
    createdAt: "06 Jul 2026 02:45 PM",
    icon: <HowToVote />,
    color: "#D81B60",
  },

];

export default function RecentHierarchy() {

  return (

    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >

      <CardHeader

        title="Recent Hierarchy"

        subheader="Latest additions to the organization"

      />

      <CardContent
        sx={{
          pt: 0,
        }}
      >

        <List>

          {recentItems.map((item, index) => (

            <React.Fragment key={item.id}>

              <ListItem
                secondaryAction={

                  <Stack
                    direction="row"
                    spacing={1}
                  >

                    <IconButton
                      color="primary"
                    >
                      <Visibility />
                    </IconButton>

                    <IconButton
                      color="secondary"
                    >
                      <Edit />
                    </IconButton>

                  </Stack>

                }
              >

                <ListItemAvatar>

                  <Avatar
                    sx={{
                      bgcolor: item.color,
                    }}
                  >
                    {item.icon}
                  </Avatar>

                </ListItemAvatar>

                <ListItemText

                  primary={

                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >

                      <Typography
                        fontWeight={600}
                      >
                        {item.name}
                      </Typography>

                      <Chip
                        size="small"
                        label={item.type}
                        color="primary"
                      />

                    </Stack>

                  }

                  secondary={

                    <>

                      <Typography
                        variant="body2"
                      >
                        Created By :
                        {" "}
                        {item.createdBy}
                      </Typography>

                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        {item.createdAt}
                      </Typography>

                    </>

                  }

                />

              </ListItem>

              {index !==
                recentItems.length - 1 && (
                <Divider />
              )}

            </React.Fragment>

          ))}

        </List>

      </CardContent>

    </Card>

  );

}