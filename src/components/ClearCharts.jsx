import React, { useState } from 'react';
import { Button } from '@mui/material';

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
