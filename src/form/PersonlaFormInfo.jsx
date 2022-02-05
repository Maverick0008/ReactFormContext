import React from "react";
import { Box } from "@mui/material";
import FormFields from "../components/FormFields";
const PersonlaFormInfo = () => {
  return (
    <>
      <div className="row">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
        >
          <FormFields name="firstName" label="Name" />
          <FormFields name="lastName" label="LastName" />
          <FormFields name="email" label="Email" />
        </Box>
      </div>
    </>
  );
};

export default PersonlaFormInfo;
