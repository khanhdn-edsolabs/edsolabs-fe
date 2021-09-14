import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

export default function CircularUnderLoad({ displayLoad }) {
  return (
    <Box display={displayLoad}>
      <CircularProgress disableShrink />
    </Box>
  );
}
