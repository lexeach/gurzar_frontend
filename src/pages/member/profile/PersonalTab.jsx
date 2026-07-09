import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Stack,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";

import {
  ContentCopy,
  Person,
  Badge,
  Cake,
  Wc,
  Bloodtype,
  Phone,
  Email,
  School,
  Work,
  Fingerprint,
  CreditCard,
} from "@mui/icons-material";

export default function PersonalTab({ member }) {

  if (!member) return null;

  const copyText = (text) => {
    if (text) navigator.clipboard.writeText(text);
  };

  const calculateAge = (dob) => {

    if (!dob) return "-";

    const birth = new Date(dob);

    const today = new Date();

    let age =
      today.getFullYear() -
      birth.getFullYear();

    const month =
      today.getMonth() -
      birth.getMonth();

    if (
      month < 0 ||
      (month === 0 &&
        today.getDate() <
          birth.getDate())
    ) {
      age--;
    }

    return age;

  };

  const Item = ({
    icon,
    title,
    value,
    copy = false,
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

        {copy && value && (

          <Tooltip title="Copy">

            <IconButton
              size="small"
              onClick={() =>
                copyText(value)
              }
            >

              <ContentCopy
                fontSize="small"
              />

            </IconButton>

          </Tooltip>

        )}

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

        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
        >
          Personal Information
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Grid
          container
          spacing={3}
        >

          <Item
            icon={<Person color="primary" />}
            title="Full Name"
            value={member.name}
          />

          <Item
            icon={<Badge color="primary" />}
            title="Father's Name"
            value={member.fatherName}
          />

          <Item
            icon={<Badge color="primary" />}
            title="Mother's Name"
            value={member.motherName}
          />

          <Item
            icon={<Cake color="primary" />}
            title="Date of Birth"
            value={member.dob}
          />

          <Item
            icon={<Cake color="primary" />}
            title="Age"
            value={`${calculateAge(member.dob)} Years`}
          />

          <Item
            icon={<Wc color="primary" />}
            title="Gender"
            value={member.gender}
          />

          <Item
            icon={<Bloodtype color="error" />}
            title="Blood Group"
            value={member.bloodGroup}
          />

          <Item
            icon={<Phone color="success" />}
            title="Mobile Number"
            value={member.mobile}
            copy
          />

          <Item
            icon={<Phone color="success" />}
            title="Alternate Mobile"
            value={member.alternateMobile}
            copy
          />

          <Item
            icon={<Email color="info" />}
            title="Email"
            value={member.email}
            copy
          />

          <Item
            icon={<School color="secondary" />}
            title="Education"
            value={member.education}
          />

          <Item
            icon={<Work color="warning" />}
            title="Occupation"
            value={member.occupation}
          />

          <Item
            icon={<Fingerprint color="primary" />}
            title="Aadhaar Number"
            value={member.aadhaar}
            copy
          />

          <Item
            icon={<CreditCard color="primary" />}
            title="PAN Number"
            value={member.pan}
            copy
          />

        </Grid>

        <Divider sx={{ my: 4 }} />

        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
        >

          <Chip
            color="success"
            label={
              member.status ||
              "Verified"
            }
          />

          <Chip
            color="primary"
            label={
              member.membershipType ||
              "Primary Member"
            }
          />

          <Chip
            color="secondary"
            label={
              member.maritalStatus ||
              "Married"
            }
          />

          <Chip
            color="info"
            label={
              member.nationality ||
              "Indian"
            }
          />

        </Stack>

      </CardContent>

    </Card>

  );

}