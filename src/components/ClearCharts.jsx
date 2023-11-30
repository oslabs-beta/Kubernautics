import React, { useState } from 'react';
import { Button } from '@mui/material';

// Clear any additional rendered charts with a "Reset to Defaults" button click
const ClearChart = () => {
  return (
    <Button
      id='clearbutton'
      variant='contained'
      onClick={() => {
        localStorage.clear();
        location.reload();
      }}
    >
      Reset to Defaults
    </Button>
  );
};

export default ClearChart;
