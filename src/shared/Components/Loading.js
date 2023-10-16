import React from "react";

//UI
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

const Loading = ({ size = 40, color = "primary" }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress color={color} size={size} />
    </Box>
  );
};

export default Loading;
