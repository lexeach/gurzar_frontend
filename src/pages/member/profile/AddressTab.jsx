import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Stack,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";

import {
  Home,
  LocationOn,
  Public,
  Apartment,
  AccountTree,
  Place,
  PinDrop,
  LocalPolice,
  Map,
  ContentCopy,
  Print,
} from "@mui/icons-material";

export default function AddressTab({ member }) {

  if (!member) return null;

  const copyAddress = () => {

    const address = `
${member.currentAddress || ""}
${member.village || ""}
${member.tehsil || ""}
${member.district || ""}
${member.state || ""}
${member.country || ""}
${member.pinCode || ""}
`;

    navigator.clipboard.writeText(address);

  };

  const Field = ({
    icon,
    title,
    value,
  }) => (

    <Grid
      item
      xs={12}
      md={6}
    >

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >

        {icon}

        <Stack flex={1}>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {title}
          </Typography>

          <Typography
            fontWeight={600}
          >
            {value || "-"}
          </Typography>

        </Stack>

      </Stack>

    </Grid>

  );

  return (

    <Card
      sx={{
        borderRadius: 4,
      }}
    >

      <CardContent>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >

          <Typography
            variant="h5"
            fontWeight={700}
          >
            Address Information
          </Typography>

          <Stack
            direction="row"
            spacing={1}
          >

            <Tooltip title="Copy Address">

              <IconButton
                onClick={copyAddress}
              >

                <ContentCopy />

              </IconButton>

            </Tooltip>

            <Tooltip title="Print">

              <IconButton>

                <Print />

              </IconButton>

            </Tooltip>

          </Stack>

        </Stack>

        <Divider sx={{ mb: 4 }} />

        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Permanent Address
        </Typography>

        <Card
          variant="outlined"
          sx={{ mb: 4 }}
        >

          <CardContent>

            <Typography>

              {member.permanentAddress ||
                "Not Available"}

            </Typography>

          </CardContent>

        </Card>

        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Current Address
        </Typography>

        <Card
          variant="outlined"
          sx={{ mb: 4 }}
        >

          <CardContent>

            <Typography>

              {member.currentAddress ||
                "Not Available"}

            </Typography>

          </CardContent>

        </Card>

        <Grid
          container
          spacing={3}
        >

          <Field
            icon={<Public color="primary" />}
            title="Country"
            value={member.country}
          />

          <Field
            icon={<Apartment color="primary" />}
            title="State"
            value={member.state}
          />

          <Field
            icon={<Apartment color="primary" />}
            title="District"
            value={member.district}
          />

          <Field
            icon={<AccountTree color="primary" />}
            title="Tehsil"
            value={member.tehsil}
          />

          <Field
            icon={<Place color="primary" />}
            title="Village / City"
            value={member.village}
          />

          <Field
            icon={<Home color="primary" />}
            title="Booth"
            value={member.booth}
          />

          <Field
            icon={<PinDrop color="error" />}
            title="PIN Code"
            value={member.pinCode}
          />

          <Field
            icon={<LocalPolice color="primary" />}
            title="Police Station"
            value={member.policeStation}
          />

          <Field
            icon={<LocationOn color="secondary" />}
            title="Nearest Landmark"
            value={member.landmark}
          />

        </Grid>

        <Divider sx={{ my: 4 }} />

        <Button
          variant="contained"
          startIcon={<Map />}
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${member.currentAddress || ""}, ${member.village || ""}, ${member.district || ""}, ${member.state || ""}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </Button>

      </CardContent>

    </Card>

  );

}